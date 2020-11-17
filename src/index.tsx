import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import {createStore} from 'redux';
import allReducers from './reducers';

const store = createStore(
    allReducers
);

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;


ReactDOM.render(<Auth0Provider domain={domain} clientId={clientId} redirectUri='http://localhost:8100/selection'><App /></Auth0Provider>, document.getElementById('root'));
