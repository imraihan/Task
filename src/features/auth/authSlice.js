import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
  isError: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk("auth/register", async (body) => {
  // console.log("body", body);
  const res = await fetch(baseURL + "auth/signUp", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  console.log(data);
  return data;
});

export const login = createAsyncThunk("auth/login", async (body) => {
    console.log("body", body);
    const res = await fetch(baseURL + "auth/signIn", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data = await res.json();
    console.log(data);
    return data;
    // if(res.ok) {
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     localStorage.setItem("token", data.token);
    //     return { user: data.user, token: data.token}
    // } else {
    //     throw new Error(data.message);  
    // }

  });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        state.token= null;       
      })
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
