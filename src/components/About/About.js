import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import profile from "../../static/images/profile.png";
import { Typography } from "@material-ui/core";
import StyledButton from "../StyledButton/StyledButton";
import resume from "../../static/pdf/resume_jun_yamada.pdf";
import javascriptLogo from "../../static/images/logo/javascript.svg";
import reactLogo from "../../static/images/logo/react.svg";
import vueLogo from "../../static/images/logo/vue.svg";

const ContentAbout = styled(Grid)`
  && {
    background-color: #fcfcfc;
    padding-top: 5rem;
    padding-bottom: 10rem;
  }
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const IntroSentence = styled(Typography)`
  && {
    color: inherit;
    @media (max-width: 600px) {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;
const JobTitle = styled(Typography)`
  && {
    color: inherit;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    opacity: 0.7;
    @media (max-width: 600px) {
      margin-top: 2rem;
    }
  }
`;

const Introduction = styled(Typography)`
  && {
  }
`;

const Strength = styled(Typography)`
  && {
    color: inherit;
    opacity: 0.7;
    margin: 4rem auto 1rem auto;
  }
`;

const Skills = styled(Typography)`
  && {
    color: inherit;
    opacity: 0.7;
    margin-top: 3.5rem;
  }
`;

const StyledUl = styled.ul`
  margin-top: 0.7rem;
  padding-left: 0rem;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-bottom: 0.5rem;
  color: inherit;
`;

const Category = styled.span`
  color: inherit;
  opacity: 0.7;
`;

// const StrongSkills = styled.span`
//   color: inherit;
//   font-weight: bold;
// `;

const ProfilePhoto = styled.img`
  max-width: 50%;
`;

const ProfileGrid = styled(Grid)`
  && {
    text-align: center;
  }
`;

const ContentButton = styled.div`
  margin: 3rem auto;
  /* text-align: center; */
  @media (max-width: 960px) {
    text-align: center;
  }
`;

// const ContentSocial = styled.div`
//   margin-top: 3rem;
// `;

// const SocialLogo = styled.img`
//   text-align: center;
//   height: 2rem;
//   margin: auto 0.5rem;
//   :hover {
//     opacity: 0.7;
//   }
// `;

const WrapSkillLogo = styled.div`
  text-align: center;
  margin-right: 3rem;
  @media (max-width: 960px) {
    margin-right: 2rem;
  }
  @media (max-width: 600px) {
    margin-right: 1.5rem;
  }
`;

const SkillsLogo = styled.img`
  height: 3rem;
  margin: 0 auto;
`;

const SkillName = styled.div`
  margin-top: 1rem;
`;

class About extends Component {
  render() {
    return (
      <ContentAbout container justify="center" id="about">
        <Grid item xs={11} sm={10}>
          <Title variant="h4">ABOUT</Title>
          <Grid container justify="center">
            <ProfileGrid item xs={12} sm={5} md={6}>
              <ProfilePhoto src={profile} alt="profile" />
            </ProfileGrid>
            <Grid item xs={12} sm={7} md={6}>
              <IntroSentence variant="h4">Jun Yamada</IntroSentence>
              <JobTitle variant="h6">Front-End developer:</JobTitle>
              <Introduction variant="subtitle1">
                I have worked as a front-end web developer, a software engineer.
                My strength is a software focused front-end, writing JavaScript
                frameworks like React.js, Vue.js. In my free time, I like
                working out, watching movies.
              </Introduction>
              <Strength variant="h6">Specialities:</Strength>
              <Grid container>
                <Grid item>
                  <WrapSkillLogo>
                    <SkillsLogo src={reactLogo} alt="ReactLogo" />
                    <SkillName> React.js</SkillName>
                  </WrapSkillLogo>
                </Grid>
                <Grid item>
                  <WrapSkillLogo>
                    <SkillsLogo src={vueLogo} alt="VueLogo" />
                    <SkillName>Vue.js</SkillName>
                  </WrapSkillLogo>
                </Grid>
                <Grid item>
                  <WrapSkillLogo>
                    <SkillsLogo src={javascriptLogo} alt="JavaScriptLogo" />
                    <SkillName> JavaScript</SkillName>
                  </WrapSkillLogo>
                </Grid>
              </Grid>
              {/* <Typography variant="subtitle1"> */}
              {/* <StyledUl>
                  <StyledLi></StyledLi>
                  <StyledLi></StyledLi>
                  <StyledLi></StyledLi>
                </StyledUl> */}
              {/* </Typography> */}
              <Skills variant="h6">Other skills:</Skills>
              <Typography variant="subtitle1">
                <StyledUl>
                  <StyledLi>
                    <Category>Languages: </Category>
                    <span>
                      &nbsp;TypeScript, Python, HTML5, CSS3, Sass, Java
                    </span>
                  </StyledLi>
                  <StyledLi>
                    <Category>Frameworks / Libraries: </Category>
                    &nbsp;Django, jQuery, Bootstrap
                  </StyledLi>
                  <StyledLi>
                    <Category>Others: </Category>
                    &nbsp;Docker, Google Cloud Platform, MySQL, Git, Ubuntu
                  </StyledLi>
                </StyledUl>
              </Typography>
              {/* <ContentSocial>
                <a
                  href="https://github.com/eastend-street"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={githubLogo} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jun-yamada-0097"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={linkedInLogo} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.facebook.com/yamada.junya1211"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialLogo src={FacebookLogo} alt="Facebook" />
                </a>
              </ContentSocial> */}
              <ContentButton>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <StyledButton
                      name="Resume"
                      url={resume + "#index"}
                      target="_blank"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledButton
                      name="Email"
                      url="mailto:jun.yamada0097@gmail.com"
                      target="_blank"
                    />
                  </Grid>
                </Grid>
              </ContentButton>
            </Grid>
          </Grid>
        </Grid>
      </ContentAbout>
    );
  }
}

export default About;
