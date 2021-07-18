import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  max-width: 980px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  height: 100px;
`;

const CompanyLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #93918F;
`;

const TermsLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  color: #93918F;
`;

const Footer = () => (
  <FooterContainer>
    <CompanyLink href="https://profy.dev/employers" target="_blank" rel="noopener noreferrer">profy.dev</CompanyLink>
    <Link to="/"><img src="/sign.svg" alt="logo" /></Link>
    <TermsLink to="/terms">Terms & Privacy</TermsLink>
  </FooterContainer>
);

export default Footer;
