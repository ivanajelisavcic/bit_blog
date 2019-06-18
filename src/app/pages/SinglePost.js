import React from 'react';
import { Link } from "react-router-dom";

const SinglePost = (props) => {


    return (
        <>
            <h1>SINGLE POST TITLE {props.match.params.id}</h1>
            <Link to='/single_author'>Author Name</Link>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            <h3>3 more posts from same author</h3>
            <ul>
                <li>Title 10</li>
                <li>Title 11</li>
                <li>Title 12</li>
            </ul>

        </>

    )

}

export { SinglePost }