import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import loginSlice from "../features/loginSlice";


const store = configureStore({
    reducer:{
        loginSlice:loginSlice
    }
});

export default store;


export type  RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> =  useSelector; 