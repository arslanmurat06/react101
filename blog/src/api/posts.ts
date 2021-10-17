import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostDTO } from "../types/PostDTO";

const axiosConfig = {  headers: {
    "Content-Type": "application/json"
}};


export const getAllPosts = createAsyncThunk("getAllPosts",async()=>{
    const response =await axios.get<PostDTO[]>("/posts");
    return response.data;
});

export const getPost = createAsyncThunk("getPost", async(id:string)=>{
    const response =await axios.get<PostDTO>(`/posts/${id}`);
    return response.data;
});

export const deletePost = createAsyncThunk("deletePost", async(id:string)=>{
    const response = await axios.delete(`/posts/${id}`);
    return response.data;
});

export const updatePost = createAsyncThunk("updatePost",async(data:PostDTO)=>{
    console.log("update olacak data")
    console.log(data);
    const response = await axios.put<PostDTO>(`/posts/${data._id}`,JSON.stringify(data),axiosConfig);
    return response.data;
})

export const createPost = createAsyncThunk("createpost",async(data:PostDTO)=>{
    const response = await axios.post<PostDTO>("/posts/",JSON.stringify(data),axiosConfig);
    return response.data;
})