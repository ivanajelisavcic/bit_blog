import React from 'react';
import '../../../src/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbarDiv">
            <ul className='navbar nav float-right'>
                <li className="navPages nav-item border-right"><Link to='/'>Home</Link></li>
                <li className="navPages nav-item border-right"><Link to='/authors'>Authors</Link></li>
                <li className="navPages nav-item"><Link to='/about'>About</Link></li>
            </ul>
        </div>
    );
}

export { Navbar };