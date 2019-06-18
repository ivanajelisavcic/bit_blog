import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "./app/pages/Home";
import { Authors } from "./app/pages/Authors";
import { SingleAuthor } from "./app/pages/SingleAuthor";
import { About } from "./app/pages/About";
import { SinglePost } from "./app/pages/SinglePost";


// class Main extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         }
//     }


//     render() {
//         return (


//             <main className='container'>
//                 <Switch>
//                     <Route path="/" component={Home} />
//                     <Route path="/authors" component={Authors} />
//                     <Route path="/single-author" component={SingleAuthor} />
//                     <Route path="/about" component={About} />
//                     <Route path="/single_post/:id" component={SinglePost} />
//                 </Switch>
//             </main>
//         );
//     }
// }
// export { Main };