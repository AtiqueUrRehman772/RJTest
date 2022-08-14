import React, { Component } from 'react';

export class Login extends Component {
    static displayName = Login.name;
    async onSubmit(e) {
        e.preventDefault();
        var userName = this.userName;
        var userPass = this.userPass;
        await this.userAuth(userName.value, userPass.value);
    }
    response = {
        userName: "abc",
        userPass: "xyz",
        userRole: "Anonymous"
    };
    async userAuth(userName, userPass) {
        this.response = await fetch('https://localhost:44322/api/App/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                userPass: userPass,
            })
        }).then(res => res.json()).then((res) => {
            this.response = res;
            if (this.response.userRole === 'admin')
                window.location = "/admin/homepage";
            else if (this.response.userRole === 'labadmin') {
                window.location = "/labadmin/locations";
            }
            else if (this.response.userRole === 'labassisstant') {
                window.location = "/labassisst/locations";
            }
        })
            .catch((error) => {
                console.log('error: ' + error);
            })
    };
    render() {
        const loginBoxStyle = {
            width: "30%",
        };
        return (
            <div class="mainContainerLogin">
                <div class='topBanner'>
                    <h2>Biit Lab Inventory System</h2>
                </div>
                <div class="login-box" style={loginBoxStyle}>
                    <div class="login-logo">
                        <a href="../../index2.html"><b>BIIT</b>Lab Inventory System</a>
                    </div>
                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">Sign in to start your session</p>

                            <form action='' method="post">
                                <div class="input-group mb-3">
                                    <input type="email" id='userName' class="form-control" placeholder="Email" ref={(c) => this.userName = c} name="userName" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fa fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Password" ref={(c) => this.userPass = c} name="userPass" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fa fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <button type='button' onClick={this.onSubmit.bind(this)} class="btn btn-primary">Sign-In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class='bottomBanner' style={{ position: 'absolute', bottom: 0 }}>
                    <h6>Powered by <strong>BARANI INSTITUTE OF INFORMATION TECHNOLOGY</strong></h6>
                </div>
            </div>
        );
    }
    loginuserAuth = () => {
        console.clear();
        this.userAuth();
    }
}
