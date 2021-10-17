import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "../api/auth";
import { UserDTO } from "../types/UserDTO";


export interface UserState {
    data: UserDTO |null;
    loading: boolean;
    error: string;
    deleted: boolean;
    updated: boolean;
    created: boolean;
    loggedIn:boolean;
  }
  
  const initialState: UserState = {
    data: null,
    loading: false,
    error: "",
    deleted: false,
    updated: false,
    created: false,
    loggedIn:false,
  };


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      logout:(state)=>{
        state.loggedIn=false;
        state.data=null;
        state.created=false;
        state.deleted=false;
        state.loading=false;
        state.updated=false;
      }
    },
    extraReducers: (builder) => {

      //#region Register
        builder.addCase(register.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.deleted = false;
            state.updated = false;
            state.created = false;
            state.loggedIn =false;
          });
      
          builder.addCase(
            register.fulfilled,
            (state, action: PayloadAction<UserDTO>) => {
              state.data = action.payload;
              state.loading = false;
              state.error = "";
              state.created = true;
              state.loggedIn =false;
            }
          );
      
          builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "";
          });

          //#endregion 

          //#region Login
          builder.addCase(login.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.deleted = false;
            state.updated = false;
            state.created = false;
            state.loggedIn =false;
          });
      
          builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<UserDTO>) => {
              state.data = action.payload;
              state.loading = false;
              state.error = "";
              state.loggedIn =true;
            }
          );
      
          builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message)
            if(action.error.message!.includes("400"))
              state.error = "Please check your credentials";
            else
            state.error = action.error.message ?? "";
          });

          //#endregion
    }
});

export const { logout } = userSlice.actions

export default userSlice.reducer;

