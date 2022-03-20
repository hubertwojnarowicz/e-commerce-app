import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import FirebaseContext from './context/firebase';
import { db, app, auth } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ db, app, auth }}>
    <React.StrictMode>
      <App />
      <GlobalStyles />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
