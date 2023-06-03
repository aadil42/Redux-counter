import { useSelector, useDispatch } from 'react-redux';

// importinat auth actions
import { authActions } from '../store';


import classes from './Header.module.css';


const Header = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.logIn());
  }

  let nav = <nav>
              <ul>
                <li>
                <button onClick={loginHandler}>LogIn</button>
                </li>
              </ul>
            </nav>;

  if(isAuthenticated) {
    nav =  <nav>
                  <ul>
                    <li>
                      <a href='/'>My Products</a>
                    </li>
                    <li>
                      <a href='/'>My Sales</a>
                    </li>
                  </ul>
          </nav>;
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {nav}
    </header>
  );
};

export default Header;
