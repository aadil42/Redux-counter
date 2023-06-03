
import {createSlice} from '@reduxjs/toolkit';


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

// exporting counter actions so we can use it.
export const counterActions = counterSlice.actions; 

export default counterSlice;

