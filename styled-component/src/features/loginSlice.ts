import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export interface LoginState{
   data:LoginResponse | null,
   loading:boolean,
   error:string
}


interface LoginResponse{
    token:string
}

const initialState: LoginState = {
    data:null,
    loading:false,
    error:""
}


export const login = createAsyncThunk("login", async()=>{

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
    const response = await axios.post<LoginResponse>(
        'https://fakestoreapi.com/auth/login',
    JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    }),axiosConfig);


    console.log(response.data)
    return response.data;
});



const loginSlice = createSlice({

    name:"login",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(login.pending,(state, action)=>{
            state.loading = true;
            state.error ="";
        });

        builder.addCase(login.fulfilled, (state, action:PayloadAction<LoginResponse>)=>{

            state.data = action.payload;         
            state.loading= false;
        });

        builder.addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? ""
        });

    }
});


 export default loginSlice.reducer;

//  export const {login} = loginSlice.actions;