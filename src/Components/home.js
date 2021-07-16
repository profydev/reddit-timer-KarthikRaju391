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
  </div>
);

export default Home;
