import { ProductType, ProductDispatch } from "../models/product"
import api from '../utils/api';

export const getAllProducts = ()=>async (dispatch:ProductDispatch)=>{
    dispatch({type:"GET_ALL_PRODUCTS_START"});

    try {
    var response = await api().get<ProductType[]>("products");
    dispatch({type:"GET_ALL_PRODUCTS_SUCCESS",payload:response.data});
        
    } catch (error) {
        dispatch({type:"GET_ALL_PRODUCTS_ERROR",error:error as string});
    }
}