import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import AllPost from './AllPost';
import Login from './Login';

class Navigation extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand" href="#">Navbar</a>

                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/Home">Home</NavLink></a>
                                    
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/About">About</NavLink></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/NewPost">Write Post</NavLink></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/AllPost">All Post</NavLink></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" ><NavLink to="/Login">Log In</NavLink></a>
                                    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </HashRouter>
        );
    }
}

export default Navigation;

