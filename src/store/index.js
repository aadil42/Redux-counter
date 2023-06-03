import {configureStore} from '@reduxjs/toolkit';


// importing counter slice
import counterSlice from './counterSlice';
// importing auth slice
import authSlice from './authSlice';

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export default store;
