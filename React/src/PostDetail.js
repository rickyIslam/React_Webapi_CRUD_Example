import React, { Component } from 'react';

class PostDetail extends Component {
    constructor() {
        super();
        this.state =
            {
                data: [],
                commentId: '',
                postId: '',
                comment: ''
            }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.refresh = this.refresh.bind(this);

    }
    componentDidMount() {
        fetch('http://localhost:5112/api/Post/' + this.props.match.params.id)
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({
                    data: findresponse,
                })
            })
    }

    // ------------- | COMPONENT UPDATE AFTER SATATE CHANGE | ------------------
    shouldComponentUpdate(nextState) {
        return true;
    }

    // ------------- | COMPONENT UPDATE AFTER SATATE CHANGE | ------------------
    componentWillUpdate(nextState) {
        fetch('http://localhost:5112/api/Post/' + this.props.match.params.id)
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({
                    data: findresponse,
                })
            })
    }

    refresh() {

    }

    removeComment(commentId, e) {
        fetch('http://localhost:5112/api/Post?commentId=' + commentId, { method: 'delete' })
            .then((Response) => Response.json())
            .then((findresponse) => {
                alert(findresponse.result);
                console.log(findresponse);
            })
    }

    handleChange(event) {
        this.setState({ comment: event.target.value })
    }

    handleSubmit(event) {
        var num = Math.floor(Math.random() * 90000) + 10000;
        var loads = 1;
        fetch('http://localhost:5112/api/values', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                commentId: num,
                postId: this.props.match.params.id,
                comment: this.state.comment
            })
        }).then((Response) => Response.json())
            .then((findresponse) => {
                alert(findresponse.result);
            })

    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((allPost, key) =>
                        <ul key={allPost.postId}>
                            <div class="card card-nav-tabs">
                                <h4 class="card-header card-header-info">{allPost.postTitle}</h4>
                                <div class="card-body">
                                    <h4 class="card-title">Post ID: {allPost.postId}</h4>
                                    <p class="card-text">{allPost.postBody}</p>
                                    <h4 class="card-title">Comments-</h4>
                                    {/* COMMENT SECTION */}
                                    {
                                        allPost.Comments.map((cmt) =>
                                            <ul key={cmt.commentId}>
                                                <div class="alert alert-success">
                                                    <div class="container">
                                                        <div class="alert-icon">
                                                            <i class="material-icons">check</i>
                                                        </div>
                                                        {/* onClick={(e) => this.handleClick(param, e)} */}
                                                        <button type="button" class="close" onClick={this.removeComment.bind(this, cmt.commentId)} aria-label="Close">
                                                            <span aria-hidden="true"><i class="material-icons">clear</i></span>
                                                        </button>
                                                        <p key={cmt.commentId} ><i>Anonymous User</i> Commented:</p> {cmt.comment}
                                                    </div>
                                                </div>
                                            </ul>
                                        )
                                    }

                                    <h4 class="card-title">Add Your Comments Here:</h4>
                                    <div>
                                        <div class="form-group">
                                            <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange} ></textarea>
                                            <button type="submit" class="btn btn-info" onClick={this.handleSubmit} >Submit comment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </ul>
                    )
                }
            </div>

        );
    }
}

export default PostDetail;