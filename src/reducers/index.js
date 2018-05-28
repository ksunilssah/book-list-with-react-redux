import { combineReducers } from 'redux';
import BookReducer from './reducer_books';

const rootReducer = combineReducer({
    books: BookReducer
});

export default rootReducer;