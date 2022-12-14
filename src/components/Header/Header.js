import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Homes</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
        </div>
    );
};

export default Header;