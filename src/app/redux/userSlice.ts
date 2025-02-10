import { createSlice } from "@reduxjs/toolkit";
import { UserOrNull } from "./types";


//  Initialisation du state du reducer
const initialState:UserOrNull = null;


//  Paramétrage du reducer
export const userSilce = createSlice({
    name:'user',
    initialState,
    reducers:{
        initUser:(state, actions)=>{
            return actions.payload;
        },
        login:(state, actions)=>{
            return state;
        },
        logout:(state, actions)=>{
            return state;
        },
    }
})

//  Exportation des actions
export const { initUser, login, logout } = userSilce.actions ;

//  Exportation du reducer
export default userSilce.reducer;