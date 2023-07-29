import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1e1e1e;
  }
`;

const theme = {
  media: {
    desktop: '(min-width: 768px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    phone: '(max-width: 425px)',
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
