import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppWeb3, useBalance } from './hooks';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import theme from "./theme";
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>

      </Provider>
    </ThemeProvider>
  );
}

export default App;
