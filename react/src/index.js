import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightgreen from '@material-ui/core/colors/lightGreen';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: lightgreen,
    secondary: pink,
    error: red,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
