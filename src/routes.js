import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import NotFoundPage from './components/common/NotFoundPage';
import BookPage from './components/book/BookPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="books" component={BookPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
