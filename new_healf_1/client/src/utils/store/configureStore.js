import { createStore, combineReducers } from "redux";

const createCleanStore = () => createStore(combineReducers({}));

export default createCleanStore;
