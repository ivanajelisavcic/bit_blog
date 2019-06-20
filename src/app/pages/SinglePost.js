import React from 'react';
import { Link } from "react-router-dom";
import { fetchSinglePost } from "../services/PostFetch"
import { fetchSingleAuthor } from "../services/AuthorFetch";
import { fetchPostsForChosenAuthor } from "../services/AuthorFetch"



class SinglePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {},
            post: [],
            authorPosts: []         
            }
    }

    fetchAllAuthorAndPostDetails () {

        fetchSinglePost(this.props.match.params.id).then((post) => {
            this.setState({
                post : post
})
fetchSingleAuthor(post.userId).then((author) => {
    this.setState({
        author : author
    })
}) 
fetchPostsForChosenAuthor(post.userId).then((chosenAuthorPosts) => {
    this.setState({
        chosenAuthorPosts : chosenAuthorPosts
    })
})
})
}

componentDidMount() {
    this.fetchAllAuthorAndPostDetails()
}

componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
        fetchSinglePost(this.props.match.params.id).then((post) => {
            this.setState({
                post
            })
        })
    }
}


render() {
    return (

     <>
                <Link to='/'>
                                    </Link>
                <h2>{this.state.post.title}</h2>
                <h4><Link to={`/author/${this.state.post.userId}`}>{this.state.author.name}</Link></h4>
                <p>{this.state.post.body}</p>
                <hr></hr>

                <h5>3 more posts from same author:</h5>
                <ul>
                    {this.renderMorePosts(this.state.authorPosts)}
                </ul>
            </>
        );
    }
}



export { SinglePost }



// feature_1 -> static content
    //     componentDidMount() {

//     }

//     render() {
//         return (


//             <>
//                 <h1>SINGLE POST TITLE {this.props.match.params.id}</h1>
//                 <Link to='/authors/:authorId'>Author Name</Link>

//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


//                 <h3>3 more posts from same author</h3>
//                 <ul>
//                     <li>Title 10</li>
//                     <li>Title 11</li>
//                     <li>Title 12</li>
//                 </ul>

//             </>

//         )

//     }
// }
