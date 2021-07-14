import React from 'react';
import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1300px;
  width: 80%;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6em;

  img{
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  gap: 1.6em;
`;

const Links = styled.a`
  text-decoration: none;
  color: black;
`;

const Header = () => (
  <Container>
    <Nav>
      <a href="/"><img src="/logo.svg" alt="logo" /></a>
      <NavLinks>
        <li><Links href="/searchpage">Search</Links></li>
        <li><Links href="#how-it-works">How it works</Links></li>
        <li><Links href="#about">About</Links></li>
      </NavLinks>
    </Nav>
  </Container>
);

export default Header;
