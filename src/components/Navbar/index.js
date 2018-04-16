import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const navlinks = [{
    to: '/',
    display: 'Home'
}, {
    to: '/about',
    display: 'About'
}];

export default () =>
    <div className="navbar-container">
        {
            navlinks
                .map(({to, display}, key) =>
                    <NavLink
                        className="nav-link"
                        activeClassName="selected-nav-link"
                        key={ key }
                        exact
                        to={ to }>
                        { display }
                    </NavLink>
                )
        }
    </div>