import { combineReducers } from 'redux';
import books from './bookReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  books: books,
});

export default rootReducer;
