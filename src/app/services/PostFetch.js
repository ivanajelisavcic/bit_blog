import { SinglePost } from "../pages/SinglePost"



const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postsArray => postsArray.map((post) => new Post(post.userId, post.title, post.body, post.id)))
}

const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(postObject => new Post(postObject.userId, postObject.title, postObject.body, postObject.id))
}

export {
    fetchPosts,
    fetchSinglePost
}