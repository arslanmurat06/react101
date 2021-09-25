import { ThunkDispatch } from "redux-thunk";

export interface ProductType{
  id: number,
  title: String,
  price: Number,
  category: String,
  description: String,
  img: string,
};


export interface IProduct {
  data: ProductType;
}

export interface ProductState {
  data:ProductType[],
  loading:boolean,
  error:String
}

interface GET_ALL_PRODUCTS_START{
  type:"GET_ALL_PRODUCTS_START",
}

interface GET_ALL_PRODUCTS_SUCCESS{
  type:"GET_ALL_PRODUCTS_SUCCESS",
  payload:ProductType[]
}


interface GET_ALL_PRODUCTS_ERROR{
  type:"GET_ALL_PRODUCTS_ERROR",
  error:String
}

export type ProductAction = 
  GET_ALL_PRODUCTS_START 
| GET_ALL_PRODUCTS_SUCCESS 
| GET_ALL_PRODUCTS_ERROR; 

export type ProductDispatch =ThunkDispatch<ProductState,void, ProductAction>;