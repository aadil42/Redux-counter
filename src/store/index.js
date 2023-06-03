// import { createStore } from 'redux';
// const redux = require('redux');


import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterInitialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


const authInitialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn(state) {
            state.isAuthenticated = true;
        },
        logOut(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

// const store = createStore(counterReducer);


// exporting counter actions so we can use it.
export const counterActions = counterSlice.actions; 
// exporting auth actions
export const authActions = authSlice.actions;

export default store;

// const counterReducer = (state = initialState, action) => {
//     if(action.type === "INCREAMENT") {
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     }

//     if(action.type === 'DECREAMENT') {
//         return {
//             ...state,
//             counter: state.counter - action.value
//         }
//     }

//     if(action.type ===  'TOGGLE') {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }


// const CounterWrapper = () => {
//     const state = counterStore.getState();
//     return (
//         <div>

//         </div>
//     );
// }

// counterStore.subscribe(CounterWrapper);

// export default CounterWrapper;
