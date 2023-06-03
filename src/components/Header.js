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
  const logoutHandler = () => {
    dispatch(authActions.logOut());
  }

  let nav = <nav>

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
                    <li>
                    <button onClick={logoutHandler}>Logout</button>
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
