import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import './index.scss';
import App from './App';
import 'antd/dist/antd.css';
import {sagaWatcher} from './store/sagas';
import {rootReducer} from './store/rootReducer';


const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    // thunk, 
    // forbiddenWordsMiddleware, 
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);