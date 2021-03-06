const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Config.env to ./config/config.env
require('dotenv').config({
    path: './config/config.env'
});

// Connect to database
connectDB();


// Use bodyParser
app.use(bodyParser.json())

// Config only for development
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }));

    app.use(morgan('dev'));
}

// Load all routes
// const authRouter = require('./routes/auth.route');
const boardRouter = require('./routes/board.route');
const listRouter = require('./routes/list.route');
const cardRouter = require('./routes/card.route');
const searchRouter = require('./routes/search.route');
// Use routes
// app.use('/api/', authRouter);
app.use('/api/board/', boardRouter);
app.use('/api/list/', listRouter);
app.use('/api/card/', cardRouter);
app.use('/api/search/', searchRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not Found"
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`);
});