import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={(e) => onClick(e)}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
