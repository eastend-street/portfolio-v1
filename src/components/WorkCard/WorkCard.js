import React, { Component } from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
  }
`

const WorkImage = styled(CardMedia)`
  && {
    min-height: 15rem;
    object-fit: contain;
  }
`;

class WorkCard extends Component {
  render() {
    return (
      <StyledWorkCard>
        <CardActionArea>
          <WorkImage image="http://i.imgur.com/I86rTVl.jpg" />
        </CardActionArea>
      </StyledWorkCard>
    );
  }
}

export default WorkCard;