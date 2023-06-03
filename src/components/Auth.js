import { useRef } from 'react';
import classes from './Auth.module.css';

// getting the actions
import { authActions } from '../store';

import { useDispatch } from 'react-redux';

const Auth = () => {

  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logIn(
    {
     email: emailInput.current.value,
     password: passwordInput.current.value
    }));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailInput} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordInput} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
