'use strict';

import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';

import HelloWorld from './components/HelloWorld/HelloWorld';

React.render(
  <HelloWorld />,
  document.getElementById('app')
);
