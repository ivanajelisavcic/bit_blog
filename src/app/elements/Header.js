import React from 'react';
import { Navbar } from "./Navbar"

const Header = () => {
    return (
        <header className='clearfix'>
            <div className='container'>
                <h1 className='float-left'>BIT BLOG</h1>
                <Navbar />
            </div>
        </header>
    );
}

export { Header };