import { combineReducers } from 'redux'
import {ProductState } from '../models/product'
import productReducer from './reducers/product_reducer';


export interface AppState  {
    product :ProductState
}

const rootReducer  = combineReducers<AppState>({
    product: productReducer
});

export default rootReducer;
