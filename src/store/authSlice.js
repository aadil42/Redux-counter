import { createSlice } from '@reduxjs/toolkit'; 

const authInitialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn(state, action) {
            if(action.payload.email && action.payload.password) {
                state.isAuthenticated = true;
            }
        },
        logOut(state) {
            state.isAuthenticated = false;
        }
    }
});

// exporting auth actions
export const authActions = authSlice.actions;

export default authSlice;