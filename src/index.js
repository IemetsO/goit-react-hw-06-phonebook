import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import store from './components/store/contacts/index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor ={store.persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
