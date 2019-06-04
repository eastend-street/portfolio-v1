import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";

const StyledResumeButton = styled(Button)`
  && {
    background-color: transparent;
    border: 0.01rem solid #4e4e4e;
    border-radius: 0rem;
    text-transform: none;
    padding: 0.5rem;
    margin: 1rem;
    min-width: 10rem;
    color: #4e4e4e;
  }
`;

class StyledButton extends Component {
  render() {
    return <StyledResumeButton>{this.props.name}</StyledResumeButton>;
  };
}

export default StyledButton;
