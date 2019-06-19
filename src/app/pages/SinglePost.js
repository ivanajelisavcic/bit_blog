import React from 'react';
import { Link } from "react-router-dom";
import { fetchSinglePost } from "../services/PostFetch"


class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: []

        }
    }

    componentDidMount() {

    }

    render() {
        return (


            <>
                <h1>SINGLE POST TITLE {this.props.match.params.id}</h1>
                <Link to='/authors/:authorId'>Author Name</Link>

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
}

export { SinglePost }