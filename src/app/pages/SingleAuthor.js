import React from 'react';
import { Link } from "react-router-dom";

const SingleAuthor = (props) => {
    console.log(props);

    return (
        <>
            <Link to='/authors'>All authors</Link>
            <h1>Single Author</h1>

            <img src="https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg" alt="authorImg" height="42" width="42"></img>
            <h4>Name Surname {props.match.params.authorId}</h4>
            <p>username: my_cool_username</p>
            <p>email: my_cool@email.com</p>
            <p>phone: 1-770-736-8031</p>

            <hr></hr>

            <h4>Address</h4>
            <p>street: Bla Bla St</p>
            <p>city: Gwenborugh</p>
            <p>zipcode: 77068</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8rQUn9tKIN4hQucFCvG2hHx1ysKtqaLqQOruWthDTxQvDeFeNw" ></img>


            <hr></hr>

            <h4>Company</h4>
            <p>name: Gwenborough</p>
            <p>slogan: 77068</p>

        </>
    )
}

export { SingleAuthor }