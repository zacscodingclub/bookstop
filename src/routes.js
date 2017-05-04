import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import NotFound from './components/common/NotFoundPage';
import Book from './components/book/BookPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="books" component={Book}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
