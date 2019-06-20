import { Author } from "../entities/AuthorEntity"
import { Post } from "../entities/PostEntity"

const fetchAuthors = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(authorsArray => authorsArray.map((authors) => new Author(authors.id, authors.name, authors.username, authors.email, authors.address, authors.phone, authors.company)))
}

const fetchSingleAuthor = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then((author) => new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.company))
}


const fetchPostsForChosenAuthor = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => posts.map(posts => new Post(posts.userId, posts.id, posts.title, posts.body)))
}

export {
    fetchAuthors,
    fetchSingleAuthor,
    fetchPostsForChosenAuthor
}


