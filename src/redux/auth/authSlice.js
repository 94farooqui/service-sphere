import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login: (state) => {
            state.isAuthenticated = true
            state.isLoading = false
            console.log("Login is set")
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.isLoading = false
            console.log("Logout user")
        },
        setLoading : (state) => {
            state.isLoading = true
            console.log("Setting loading to true")
        },
        setUser : (state,action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true
        }
    }
})

export const {login, logout, setLoading, setUser} = authSlice.actions 

export default authSlice.reducer