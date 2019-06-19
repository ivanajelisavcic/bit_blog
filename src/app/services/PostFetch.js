import { Post } from "../entities/PostEntity"



const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(postsArray => postsArray.map((post) => new Post(post.userId, post.id, post.title, post.body)))


}


const fetchSinglePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(postObj => new Post(postObj.userId, postObj.id, postObj.title, postObj.body))
}

export {
    fetchPosts,
    fetchSinglePost

}