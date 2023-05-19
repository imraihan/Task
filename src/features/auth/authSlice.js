import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    user: user? user : null,
    isError: false,
    isLoading: false,
    message: ''
}

// export const register = createAsyncThunk('auth/register', async(body)=> {
//     const res = await fetch("https://localhost:3000/api/users", {
//         method:"post",
//         headers: {
//             'content-Type': "application/json",
//         },
//         body: JSON.stringify(body)

//     })
//     return await res.json();
// })

export const register = createAsyncThunk("auth/register", async () => {
    let response = await fetch("https://localhost:3000/api/users");
    let json = await response.json();
    console.log(json);
    return json;
  });

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state)=> {
            state.isError = false
            state.isLoading= false
            state.message = ''
        } 

    },

    extraReducers: (builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase (register.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        .addCase (register.rejected, (state,action)=> {
            state.isLoading= false
            state.isError=  true
            state.message = action.payload
            state.user = null
        })


    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer