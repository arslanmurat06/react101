import { ThunkDispatch } from "redux-thunk";

export interface User{
    messsage:string;
    username:string;
    email:string;
    full_name:string;
    token:string;
}

export interface UserState{
    data:User;
    loading:boolean;
    error:string;
}

export interface LoginForm{
    username:"",
    password:""
}


interface LOGIN_START{
    type:"LOGIN_START";
}

interface LOGIN_SUCCESS{
    type:"LOGIN_SUCCESS";
    payload:User;
}

interface LOGIN_ERROR{
    type:"LOGIN_ERROR";
    error:string;
}

interface LOGOUT{
    type:"LOGOUT_SUCCESS";
}


export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR|LOGOUT;
export type UserDispatch =ThunkDispatch<UserState,void, UserAction>;