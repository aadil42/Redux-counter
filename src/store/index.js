import { createStore } from 'redux';
// const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === "INCREAMENT") {
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREAMENT') {
        return {
            counter: state.counter - 1
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
