import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const incrementHandle = () => {
    dispatch({type: 'INCREAMENT'});
  }

  const decreamentHandle = () => {
    dispatch({type: 'DECREAMENT'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div className={classes['button-wrapper']}>
        <button onClick={incrementHandle}>+</button>
        <button onClick={decreamentHandle}>-</button>
      </div>
    </main>
  );
};

export default Counter;
