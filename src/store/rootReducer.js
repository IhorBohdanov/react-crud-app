import {combineReducers} from 'redux';
import {albumsReducer} from './albumsReducer';
import {appReducer} from './appReducer';


export const rootReducer = combineReducers({
  albums: albumsReducer,
  app: appReducer,
})