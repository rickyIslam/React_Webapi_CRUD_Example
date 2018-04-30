import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from "react-router-dom";

class AllPost extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5112/api/Post')
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    data: findresponse

                })
                console.log(findresponse);
            })
    }

    render() {
        return (
            <div>

                <div class="row">

                    <div class="col-md-2">

                    </div>

                    <div class="col-md-8">
                        {
                            this.state.data.map((allPost, key) =>
                                <ul key={allPost.postId}>
                                    <div class="card card-nav-tabs">
                                        <h4 class="card-header card-header-info">{allPost.postTitle}</h4>
                                        <div class="card-body">
                                            <h4 class="card-title">Post ID: {allPost.postId}</h4>
                                            <p class="card-text">{allPost.postBody}</p>
                                            <a class="btn btn-primary"><NavLink to={"/PostDetail/" + allPost.postId}>Go For Detail</NavLink></a>
                                            <a class="btn btn-primary"><NavLink to={"/EditPost/" + allPost.postId}>Edit This Post</NavLink></a>
                                        </div>
                                    </div>
                                </ul>
                            )
                        }
                    </div>

                    <div class="col-md-2">

                    </div>

                </div>

            </div>
        );
    }
}

export default AllPost;

