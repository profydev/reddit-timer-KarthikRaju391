import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import App from './App';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body{
    padding: 0;
    margin: 0;
  }
`;

const Root = () => (
  <>
    <GlobalStyle />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
