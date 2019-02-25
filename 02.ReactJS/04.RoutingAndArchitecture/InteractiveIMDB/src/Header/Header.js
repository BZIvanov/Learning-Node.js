import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Create">
                <header>
                    <NavLink exact to="/" className="logo">Interactive IMDB</NavLink>
                    <div className="header-right">
                        <NavLink exact to="/">Home</NavLink>
                        <span>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </span>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
