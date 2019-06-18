import React from 'react';
import '../../../src/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        <ul className='navbar nav float-right'>
            <li className="nav-item border-right"><Link to='/'>Home</Link></li>
            <li className="nav-item border-right"><Link to='/authors'>Authors</Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
        </ul>
    );
}

export { Navbar };