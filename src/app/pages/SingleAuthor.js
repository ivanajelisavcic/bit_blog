import React from 'react';
import { Link } from "react-router-dom";
import { fetchSingleAuthor } from "../services/AuthorFetch"


class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            author: {}

        }
    }

    componentDidMount() {
        // console.log(this.props)
        const id = (this.props.match.params.authorId)
        fetchSingleAuthor(id).then((author) => {
            this.setState({

                author: author

            })
            console.log(this.state.author)

        })
    }


    render() {

        const lat = 44.7866
        const lgt = 20.4489
        return (
            <>
                <Link to='/authors' className="allAuthorsURL">All authors</Link>
                <h1>Single Author</h1>
                <hr></hr>
                <div className="singleAuthor1stDiv">
                    <h4>Name Surname: {this.state.author.name}</h4>
                    <p>username: {this.state.author.username}</p>
                    <p>email: {this.state.author.email}</p>
                    <p>phone: {this.state.author.phone}</p>
                    <span className="image">
                        <img src="https://www.lagnakarya.com/assets/images/person-placeholder.jpg" alt="author" className="authorImage"></img></span>
                </div>

                <hr></hr>

                <div>
                    <h4>Address:</h4>
                    <p>street: {this.state.author.street}</p>
                    <p>city: {this.state.author.city}</p>
                    <p>zipcode: {this.state.author.zipCode}</p>
                    {<iframe className="map"
                        width="100%"
                        height="100%"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title={''}
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://maps.google.com/maps?q=${this.state.author.lat},${this.state.author.lng}&z=15&output=embed`}

                    />}

                </div>


                <hr></hr>

                <div>
                    <h4>Company</h4>
                    <p>name: {this.state.author.company} </p>
                    <p>slogan: {this.state.author.slogan}</p>
                </div>



            </>








            // <>
            //     <Link to='/authors'>All authors</Link>
            //     <h1>Single Author</h1>

            //     <img src="https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg" alt="authorImg" height="42" width="42"></img>
            //     <h4>Name Surname {this.props.match.params.authorId}</h4>
            //     <p>username: my_cool_username</p>
            //     <p>email: my_cool@email.com</p>
            //     <p>phone: 1-770-736-8031</p>

            //     <hr></hr>

            //     <h4>Address</h4>
            //     <p>street: Bla Bla St</p>
            //     <p>city: Gwenborugh</p>
            //     <p>zipcode: 77068</p>
            //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8rQUn9tKIN4hQucFCvG2hHx1ysKtqaLqQOruWthDTxQvDeFeNw" ></img>


            //     <hr></hr>

            //     <h4>Company</h4>
            //     <p>name: Gwenborough</p>
            //     <p>slogan: 77068</p>


        )
    }
}

export { SingleAuthor }

