import { StdioNull } from "child_process";

export  interface PostDTO{
    _id:string | null,
    title:string,
    desc:string,
    photo:string |null,
    username:string,
    categories:[] | null,
    createdAt:Date,
    updateAt:Date 
}

export interface IPost{
    data:PostDTO
}