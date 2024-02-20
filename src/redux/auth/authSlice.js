import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setLogin: (state) => {
            state.isLoggedIn = true
        },
        setLogout: (state) => {
            state.isLoggedIn = false
        },
        setLoading : (state,action) => {
            state.isLoading = action.payload
        },
        setUser : (state,action) => {
            state.user = action.payload
        }
    }
})

export const {setLogin, setLogout, setLoading, setUser} = authSlice.actions 

export default authSlice.reducer