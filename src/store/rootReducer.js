import {combineReducers} from 'redux';
import {albumsReducer} from './albumsReducer';


export const rootReducer = combineReducers({
    albums: albumsReducer,
  })