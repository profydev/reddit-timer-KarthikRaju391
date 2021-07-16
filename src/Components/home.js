import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  font-size: 38px;
  word-spacing: 4px;
  line-height: 45px;
  margin-top: 1.4em;
`;

const Subhead = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  color: #93918F;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
`;

const Button = styled(Link)`
  background-color: #FDB755;
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  padding: 1em 1em;
  margin-top: 2em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 9px;
  font-weight: bold;
`;

const Subreddit = styled(Subhead)`
  margin-top: 3em;
`;

const ImageContainer = styled(Link)`
  /* width: 100%;  */
  display: flex;
  justify-content: center;
`;

const Heatmap = styled.img`
  width: 80%;
  padding: 12px 82px;
`;

const InfoSection = styled.section`
  max-width: 650px;
  margin: 0 auto;
  margin-top: 133px;
`;

const InfoHead = styled(Heading)`
  font-size: 24px;
  font-weight: 400;
  text-align: justify;
`;

const InfoContent = styled.p`
  color: #93918F;
  line-height: 1.5em;

`;

const InfoSection2 = styled(InfoSection)`
  margin-top: 105px;
`;

const SubLinks = styled.a`
  text-decoration: none;
  color: lightskyblue;
`;

const Home = () => (
  <div>
    <div>
      <Heading>No reactions to your reddit posts?</Heading>
    </div>
    <div>
      <Subhead>Great timing, great results! Find the best time to post on your subreddit.</Subhead>
    </div>
    <ButtonContainer><Button to="/searchpage">Show me the best time</Button></ButtonContainer>
    <div>
      <Subreddit>r/javascript</Subreddit>
    </div>
    <ImageContainer to="/searchpage">
      <Heatmap src="/table.png" alt="heatmap" />
    </ImageContainer>
    <InfoSection id="how-it-works">
      <InfoHead>
        How it works
      </InfoHead>
      <InfoContent>
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
      </InfoContent>
    </InfoSection>
    <InfoSection2 id="about">
      <InfoHead>About</InfoHead>
      <InfoContent>
        This app was created during a course on
        <SubLinks rel="noreferrer" target="_blank" href="https://profy.dev/"> profy.dev </SubLinks>
        with the goal to implement a
        pixel-perfect real-world application with professional workflows and
        tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
        <SubLinks rel="noreferrer" target="_blank" href="https://profy.dev/employers"> Click here for more information. </SubLinks>
      </InfoContent>
    </InfoSection2>
  </div>
);

export default Home;
