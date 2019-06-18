import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from "../src/app/elements/Header"
import { Main } from "../src/Main"
import { Footer } from "../src/app/elements/Footer"
import { Home } from "./app/pages/Home";
import { Authors } from "./app/pages/Authors";
import { SingleAuthor } from "./app/pages/SingleAuthor";
import { About } from "./app/pages/About";
import { SinglePost } from "./app/pages/SinglePost";





class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const a = {
            url: '/authors',
            path: '/authors/:authorId',
            params: {
                id: 211
            }
        }
        const m = {
            url: '/single_post/678',
            path: '/single_post/:id',
            params: {
                id: 678
            }


        };

        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/authors/:authorId" component={SingleAuthor} />
                    <Route exact path="/authors" component={Authors} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/single_post/:id" component={SinglePost} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </>
        );
    }
}

export default App;


