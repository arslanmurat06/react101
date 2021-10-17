import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserDTO } from "../types/UserDTO";


const axiosConfig = {  headers: {
    "Content-Type": "application/json"
}};


export const register = createAsyncThunk("register",async(user:UserDTO)=>{
    const response =await axios.post<UserDTO>("/auth/register",JSON.stringify(user),axiosConfig);
    return response.data;
});


export const login = createAsyncThunk("login",async(user:UserDTO)=>{
    const response =await axios.post<UserDTO>("/auth/login",JSON.stringify(user),axiosConfig);
    return response.data;
});