import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { firebase } from './lib/firebase';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <App />
      <GlobalStyles />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
