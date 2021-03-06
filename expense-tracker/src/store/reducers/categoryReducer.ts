import { CategoryAction, CategoryState } from "../../types/category";

const defaultState: CategoryState = {
data: [],
loading:false,
error:""
}

const categoryReducer = (state:CategoryState = defaultState, action:CategoryAction)=>{
    switch (action.type) {
        case "GET_CATEGORIES_START":
        return {...state, loading:true,error:""};    
        case "GET_CATEGORIES_SUCCESS":
            return {...state, loading:false, data:action.payload};                
        case "GET_CATEGORIES_ERROR":
            return {...state, loading:false, error:action.error}
        case "ADD_CATEGORY_START":
            return {...state, loading:true,error:""};    
        case "ADD_CATEGORY_SUCCESS":
            return {...state, data: [action.payload, ...state.data]};                
        case "ADD_CATEGORY_ERROR":
            return {...state, loading:false, error:action.error}
        case "UPDATE_CATEGORY_START":
            return {...state, loading:true,error:""};    
        case "UPDATE_CATEGORY_SUCCESS":
            return {...state, loading :false, data: state.data.map(c=>c.id ===action.payload.id ? action.payload :c)};                
        case "UPDATE_CATEGORY_ERROR":
            return {...state, loading:false, error:action.error}
        case "REMOVE_CATEGORY_START":
            return {...state, loading:true,error:""};    
        case "REMOVE_CATEGORY_SUCCESS":
            return {...state, loading :false, data: state.data.filter(c=>c.id !==action.payload)};                
        case "REMOVE_CATEGORY_ERROR":
            return {...state, loading:false, error:action.error}    
        default:
            return state;
    }
}

export default categoryReducer;