import React from 'react';
import { Link } from "react-router-dom";


const Authors = () => {

    return (
        <>
            <h1>AUTHORS</h1>
            <Link to='/authors/2'>Name Surname</Link>
            <hr></hr>
            <Link to='/authors/3'>Name Surname</Link>
            <hr></hr>
            <Link to='/authors/5'>Name Surname</Link>
            <hr></hr>

        </>


    )
}
export { Authors }