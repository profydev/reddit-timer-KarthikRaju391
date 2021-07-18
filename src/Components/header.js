import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  max-width: 1440px;
  padding: 0 80px;
  width: 100%;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;

  img{
    display: block;
  }
`;

const ListItem = styled.li`
  text-decoration: none;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.6em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => (
  <Container>
    <Nav>
      <Link to="/"><img src="/logo.svg" alt="logo" /></Link>
      <NavLinks>
        <ListItem><StyledLink to="/searchpage/javascript">Search</StyledLink></ListItem>
        <ListItem><StyledLink to="#how-it-works">How it works</StyledLink></ListItem>
        <ListItem><StyledLink to="#about">About</StyledLink></ListItem>
      </NavLinks>
    </Nav>
  </Container>
);

export default Header;
