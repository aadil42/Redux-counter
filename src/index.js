import React from 'react';
import ReactDOM from 'react-dom/client';
// get the provider from redux-react
import { Provider } from 'react-redux';

// get the store 
import store from './store/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
