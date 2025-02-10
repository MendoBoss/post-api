import { createSlice } from "@reduxjs/toolkit";



const stagiaireSlice = createSlice(
    {
        name : "stagiaire",
        initialState : "toto",
        reducers : {
            addName : (state,actions)=>{
                return state
            }
        }
    }
)

export default stagiaireSlice.reducer

