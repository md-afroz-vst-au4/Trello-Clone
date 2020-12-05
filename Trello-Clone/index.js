import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

// import $ from "jquery";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #FAFBFC;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// $(document).bind("DOMNodeRemoved", function(e) {
//   console.log("Removed: " + e.target.nodeName);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
