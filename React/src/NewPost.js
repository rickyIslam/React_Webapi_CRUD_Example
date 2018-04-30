import React, { Component } from 'react';

class NewPost extends Component {

    constructor() {
        super();

        this.state = {
            postId: '',
            postTitle: '',
            postBody: ''
        }

        this.postBody = this.postBody.bind(this);
        this.changePostTitle = this.changePostTitle.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
    }



    postBody(event) {
        this.setState({ postBody: event.target.value })
    }

    changePostTitle(event) {
        this.setState({ postTitle: event.target.value })
    }

    postSubmit(event) {
        var num = Math.floor(Math.random() * 90000) + 10000;
        fetch('http://localhost:5112/api/Post', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                postId: num,
                postTitle: this.state.postTitle,
                postBody: this.state.postBody


            })
        }).then((Response) => Response.json())
            .then((findresponse) => {
                alert(findresponse.result);
            })

        this.props.history.push("/AllPost");

    }

    render() {

        return (
            <div>
                <div class="row">

                    <div class="col-md-2">

                    </div>

                    <div class="col-md-8">
                        <div class="card card-nav-tabs">
                            <h4 class="card-header card-header-info">Write Your Post Here...</h4>
                            <div class="card-body">
                                <h4 class="card-title">Special title treatment</h4>
                                <p class="card-text">
                                    <div class="form-group">
                                        <label for="exampleInput1" class="bmd-label-floating">Post Title</label>
                                        <input type="text"  class="form-control" value={this.state.postTitle} onChange={this.changePostTitle} id="exampleInput1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput1" class="bmd-label-floating">Post Body</label>
                                        <textarea type="text" class="form-control" rows="3" onChange={this.postBody} ></textarea>
                                    </div>
                                </p>
                                <button type="submit" onClick={this.postSubmit} class="btn btn-primary">submit</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2">

                    </div>

                </div>


            </div>
        );
    }
}

export default NewPost;