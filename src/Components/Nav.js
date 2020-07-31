import React from 'react';
import { Link }from 'react-router-dom';

const Nav = () => {
    return (
        <div className="ui stackable menu">
            <Link to="/">
                <li className="item">Home</li>
            </Link>
            <Link to="/example-resume">
                <li className="item">Example Resume</li>
            </Link>
            <Link to="/create-resume">
                <li className="item">Create Resume</li>
            </Link>
            </div>
    );
};

export default Nav;