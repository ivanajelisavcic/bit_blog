import React from 'react';
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <>
                <h1>POSTS</h1>

                <Link to='/single_post/2'>Title 1</Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <hr></hr>
                <Link to='/single_post/4'>Title 2</Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <hr></hr>
                <Link to='single_post/55'>Title 3</Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <hr></hr>
                <Link to='single_post/678'>Title 4</Link>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <hr></hr>
            </>
        );
    }
}


export { Home };
