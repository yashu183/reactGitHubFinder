import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <nav className="navbar bg-primary">
            <h3>
                {' '}
                <i className="fab fa-github" /> {title}
            </h3>
            <ul className="my-auto">
                <li>
                    <Link className="" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar;
