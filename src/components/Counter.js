import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

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

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'})
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
