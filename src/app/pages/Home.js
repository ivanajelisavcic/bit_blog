import React from 'react';
import { Link } from "react-router-dom";
import { fetchPosts } from "../services/PostFetch"



class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []

        }
    }

    componentDidMount() {
        fetchPosts().then((posts) => {
            this.setState({

                posts: posts

            })
            // console.log(this.state.posts)
        })
    }


    render() {
        return (
            <>

                <h1>POSTS</h1>
                {this.state.posts.map(post => (
                    <div className="homePagePosts">
                        <h3><Link to={`/single_post/${post.id}`}>{post.title}</Link></h3>
                        <p>{post.body}</p>

                        <hr></hr>
                    </div>
                ))}


            </>
        );
    }
}


export { Home };
