import { createStore } from 'redux';
import testReducer from '../reducers/testReducer';

let defaultState = {
    ime: "enis"
}

const store = createStore(testReducer, defaultState);

export default store;