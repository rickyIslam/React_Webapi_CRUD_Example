import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import AllPost from './AllPost';
import PostDetail from './PostDetail' ;
import NewPost from './NewPost';
import Login from './Login';
import EditPost from './EditPost';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <HashRouter>
          <div className="container">
              <Route exact path="/Home" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/AllPost" component={AllPost} />
              <Route path="/PostDetail/:id" component={PostDetail} />
              <Route path="/NewPost" component={NewPost} />
              <Route path="/Login" component={Login} />
              <Route path="/EditPost/:id" component={EditPost} />
          </div>
          </HashRouter>
  </div>
    );
  }
}

export default App;
