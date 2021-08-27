import { CategoryDispatch, CategoryForm } from "../../types/category";
import { Category } from "../../types/category";
import api from "../../utils/api";

export const getCategories =()=> async (dispatch:CategoryDispatch)=>{
    dispatch({type:"GET_CATEGORIES_START"});
try {
    const response = await api().get<Category[]>("categories");

    dispatch({type:"GET_CATEGORIES_SUCCESS",payload:response.data});
    
} catch (error) {
    dispatch({type:"GET_CATEGORIES_ERROR",error});
}
}

export const addCategory =(form: CategoryForm)=> async (dispatch:CategoryDispatch)=>{
        dispatch({type:"ADD_CATEGORY_START"});
try {
    const response = await api().post<Category>("categories",form);

    dispatch({type:"ADD_CATEGORY_SUCCESS", payload:response.data});
    
} catch (error) {
    dispatch({type:"ADD_CATEGORY_ERROR",error});
}
}

export const updateCategory =(form: Partial<CategoryForm>, categoryID:number)=> async (dispatch:CategoryDispatch)=>{
    dispatch({type:"UPDATE_CATEGORY_START"});
try {
const response = await api().put<Category>("categories/"+categoryID,form);

dispatch({type:"UPDATE_CATEGORY_SUCCESS", payload:response.data});

} catch (error) {
dispatch({type:"UPDATE_CATEGORY_ERROR",error});
}
}

export const removeCategory =(id: number)=> async (dispatch:CategoryDispatch)=>{
        dispatch({type:"REMOVE_CATEGORY_START"});
try {
   await api().delete("categories/"+id);
    dispatch({type:"REMOVE_CATEGORY_SUCCESS", payload:id});
    
} catch (error) {
    dispatch({type:"REMOVE_CATEGORY_ERROR",error});
}
}