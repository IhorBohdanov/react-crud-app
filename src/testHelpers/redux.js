import React from "react";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "../store/rootReducer";
import { sagaWatcher } from "../store/sagas";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

export const wrapWithRedux = (component) => {
  saga.run(sagaWatcher);
  return <Provider store={store}>{component}</Provider>;
};
