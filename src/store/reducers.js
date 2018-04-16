import { combineReducers } from 'redux';
import person from './reducer.person.js';
import homeworld from './reducer.homeworld.js';

export default combineReducers({
    person,
    homeworld
});