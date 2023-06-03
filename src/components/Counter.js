import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';


// get counterActions
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandle = () => {
    dispatch(counterActions.increament());
    // dispatch({type: 'INCREAMENT', value: 1});
  }

  const increaseBy5 = () => {
    dispatch(counterActions.increaseBy(5));
    // dispatch({type: 'INCREAMENT', value: 5});
  }

  const decreaseBy5 = () => {
    dispatch(counterActions.increaseBy(-5));
  }

  const decreamentHandle = () => {
    dispatch(counterActions.decreament());
    // dispatch({type: 'DECREAMENT', value: 1});
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({type: 'TOGGLE'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter }</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes['button-wrapper']}>
        <button onClick={incrementHandle}>+1</button>
        <button onClick={increaseBy5}>+5</button>
        <button onClick={decreamentHandle}>-1</button>
        <button onClick={decreaseBy5}>-5</button>

      </div>
    </main>
  );
};

export default Counter;
