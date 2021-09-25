import { ProductAction, ProductState } from "../../models/product";

const initialState:ProductState = {
    data:[],
    loading:false,
    error:""
}
const productReducer = (state:ProductState =initialState, action:ProductAction) =>{
    switch (action.type) {
        case "GET_ALL_PRODUCTS_START":
            return {...state, loading:true,error:""};
        case "GET_ALL_PRODUCTS_SUCCESS":
            return {...state, data:action.payload, loading:false};
        case "GET_ALL_PRODUCTS_ERROR":
            return {...state,loading:false, error:action.error}    
        default:
            return state;
    }
}

export default productReducer;