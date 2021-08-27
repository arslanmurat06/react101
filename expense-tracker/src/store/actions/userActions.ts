import { LoginForm, User, UserAction, UserDispatch, UserState } from "../../types/user";
import api from "../../utils/api";

export const login= (cred:LoginForm)=> async(dispatch:UserDispatch)=>{

  dispatch({type:"LOGIN_START"});


  try {
      var response = await api.post<User>("/users/login",cred);
      dispatch({type:"LOGIN_SUCCESS",payload:response.data});
      localStorage.setItem("token",response.data.token);
  } catch (error) {

    dispatch({type:"LOGIN_ERROR", error:error});
  }
}


export const logout = ()=> (dispatch:UserDispatch)=>{
  localStorage.removeItem("token");
  dispatch({type:"LOGOUT_SUCCESS"});
}
