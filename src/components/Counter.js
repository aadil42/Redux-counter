import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandle = () => {
    dispatch({type: 'INCREAMENT', value: 1});
  }

  const increaseBy5 = () => {
    dispatch({type: 'INCREAMENT', value: 5});
  }

  const decreaseBy5 = () => {
    dispatch({type: 'DECREAMENT', value: 5});

  }

  const decreamentHandle = () => {
    dispatch({type: 'DECREAMENT', value: 1});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
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
