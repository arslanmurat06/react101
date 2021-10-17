import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import postSlice from "../features/postSlice";
import userSlice from "../features/userSlice";


const store =configureStore({
    reducer:{
        posts:postSlice,
        users:userSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=> useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector;
