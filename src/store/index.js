// import { createStore } from 'redux';
// const redux = require('redux');


import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter += action.value;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer}
});

// const store = createStore(counterReducer);

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
