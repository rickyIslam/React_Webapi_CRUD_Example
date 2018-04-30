import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            userPassword: ''
        }

        this.userPassword = this.userPassword.bind(this);
        this.userName = this.userName.bind(this);
        this.postSubmit = this.postSubmit.bind(this);
    }



    userPassword(event) {
        this.setState({ userPassword: event.target.value })
    }

    userName(event) {
        this.setState({ userName: event.target.value })
    }

    postSubmit(event) {

        fetch('http://localhost:5112/api/Account', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({


                userName: this.state.userName,
                userPassword: this.state.userPassword


            })
        }).then((Response) => Response.json())
            .then((findresponse) => {
                if (findresponse.result == 'authenticated')
                    this.props.history.push("/AllPost");
                else
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
    }

    render() {

        return (
            <div>
                <div class="row">

                    <div class="col-md-2">

                    </div>



                    <div class="col-md-8">
                        <div class="card card-nav-tabs">
                            <h4 class="card-header card-header-info">Log In Here ....</h4>
                            <div class="card-body">
                                <h4 class="card-title">Special title treatment</h4>
                                <p class="card-text">
                                    <div class="form-group">
                                        <label for="exampleInput1" class="bmd-label-floating">User Name</label>
                                        <input type="text" name="userName" class="form-control" onChange={this.userName} id="exampleInput1" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput1" class="bmd-label-floating">User Password</label>
                                        <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.userPassword} ></textarea>
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

export default Login;