export interface UserDTO{
    _id:string | null,
    username:string,
    email:string |null,
    password:string,
    profilPicture:string |null,
    createAt:string |null,
    updateAt:string | null,
}

export interface IUser{
    data:UserDTO
}