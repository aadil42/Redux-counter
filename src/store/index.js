import { createStore } from 'redux';
// const redux = require('redux');

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => {
    if(action.type === "INCREAMENT") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    if(action.type === 'DECREAMENT') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }

    if(action.type ===  'TOGGLE') {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;


// const CounterWrapper = () => {
//     const state = counterStore.getState();
//     return (
//         <div>

//         </div>
//     );
// }

// counterStore.subscribe(CounterWrapper);

// export default CounterWrapper;
