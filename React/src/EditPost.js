import React, { Component } from 'react';
import $ from 'jquery';

class PostDetail extends Component {
    constructor() {
        super();
        this.state =
            {
                data: [],
                postTitle: '',
                postId: '',
                postBody: ''
            }

        this.changeTitle = this.changeTitle.bind(this);
        this.changeBody = this.changeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        fetch('http://localhost:5112/api/Post/' + this.props.match.params.id)
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log('Edit Post Find Responsse', findresponse[0].postBody);
                this.setState({
                    postTitle: findresponse[0].postTitle,
                    postId: findresponse[0].postId,
                    postBody: findresponse[0].postBody
                })
            })

    }

    changeTitle(event) {
        this.setState({ postTitle: event.target.value })
    }

    changeBody(event) {
        this.setState({ postBody: event.target.value })
    }

    handleSubmit(event) {

        fetch('http://localhost:5112/api/Post/' + this.props.match.params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postTitle: this.state.postTitle,
                postId: this.state.postId,
                postBody: this.state.postBody

            })
        }).then((Response) => Response.json())
            .then((findresponse) => {
                console.log('Edit Post Find Responsse', findresponse.result);
            })

        this.props.history.push("/AllPost");
    }

    render() {

        return (
            <div>
                <div class="card card-nav-tabs">
                    <h4 class="card-header card-header-info">Edit Your Post</h4>
                    <div class="card-body">
                        <h4 class="card-title">Post ID: {this.state.postId}</h4>
                        <p class="card-text">
                            <div class="form-group">
                                <label for="exampleInput1" class="bmd-label-floating">Post Title</label>
                                <input type="text" class="form-control" value={this.state.postTitle} onChange={this.changeTitle} />
                            </div>

                            <div class="form-group">
                                <label for="exampleInput1" class="bmd-label-floating">Post Body</label>
                                <textarea type="text" class="form-control" id="body" rows="3" value={this.state.postBody} onChange={this.changeBody} ></textarea>
                            </div>
                        </p>
                        <div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-info" onClick={this.handleSubmit} >Submit comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

        );
    }
}

export default PostDetail;