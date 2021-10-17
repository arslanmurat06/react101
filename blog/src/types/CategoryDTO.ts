export interface CategoryDTO{
    _id:string,
    name:string,
    createAt:Date,
    updateAt:Date
}

export interface ICategory{
    data:CategoryDTO
}