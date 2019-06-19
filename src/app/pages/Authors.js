import React from 'react';
import { Link } from "react-router-dom";
import { fetchAuthors } from "../services/AuthorFetch"


class Authors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []

        }
    }

    componentDidMount() {
        fetchAuthors().then((authors) => {
            this.setState({

                authors: authors

            })
            // console.log(this.state.authors)
        })
    }


    render() {
        return (
            <>

                <h1>AUTHORS</h1>
                {this.state.authors.map(authors => (
                    <div>
                        <Link to={`/authors/${authors.id}`}>{authors.name}</Link>
                        <hr></hr>
                    </div>




                ))}

            </>


        )
    }
}

export { Authors }