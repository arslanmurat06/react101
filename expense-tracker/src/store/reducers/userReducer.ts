import { User, UserAction, UserState } from "../../types/user";


const defaultState:UserState = {
    data:{} as User,
    loading:false,
    error:""
}


const userReducer = (state: UserState =defaultState, action:UserAction)=>{
    switch (action.type) {
        case "LOGIN_START":
            return {...state ,loading:true,error:"" };
        case "LOGIN_SUCCESS":
            return {...state, data:action.payload, loading:false, error:""};
        case "LOGIN_ERROR":
            return{...state, error:action.error};
        case "LOGOUT_SUCCESS":
            return{...state, data:{} as User};
        default:
            return state;
    }
}

export default userReducer;