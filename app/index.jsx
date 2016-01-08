import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import './stylesheets/main.scss';

const store = configureStore();

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <Root store={store} />
  , root
);
