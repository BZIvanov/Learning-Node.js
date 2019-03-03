import React from 'react';
// Navlink can manage links which are pointing to the current URL, check docs for more info
import { NavLink } from 'react-router-dom';
import { UserConsumer } from '../components/contexts/user-context';

const Header = ({ isLoggedIn, username }) => {
    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeClassName="active">Book Store</NavLink>
                <NavLink to="/" activeClassName="active" aria-current="page">Home</NavLink>
                <NavLink to="/store" activeClassName="active">Store</NavLink>
                <NavLink to="/orders" activeClassName="active">My Orders</NavLink>
                <NavLink to="/cart" activeClassName="active">Cart</NavLink>
                {
                    isLoggedIn 
                        ? <NavLink to="/logout">Logout</NavLink>
                        : <NavLink to="/login">Log in</NavLink>
                }
                {
                    isLoggedIn 
                        ? <span>Hello, {username}</span>
                        : null
                }
            </nav>
        </header>
    );
};

const HeaderWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, username }) => (
                    <Header {...props} isLoggedIn={isLoggedIn} username={username} />
                )
            }
        </UserConsumer>
    )
};

export default HeaderWithContext;
