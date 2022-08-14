import React, { Component } from 'react';

export class AddUserForm extends Component {
    static displayName = AddUserForm.name;
    async onSubmit(e) {
        e.preventDefault();
        var userName = this.userName;
        var userEmail = this.userEmail;
        var userRole = this.userRole;
        var userLocation = this.userLocation;
        await this.addNewuser(userName.value, userEmail.value,userRole.value,userLocation.value);
    }
    data = {};
    async addNewuser(userName, userEmail,userRole,userLocation) {
        this.response = await fetch('https://localhost:44322/api/App/addUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                userEmail: userEmail,
                userRole: userRole,
                location: userLocation
            })
        }).then(res => res.json()).then((res) => {
            this.response = res;
            if (this.response)
                alert('User Added Successfully !!');
                window.location.reload();
        })
            .catch((error) => {
                console.log('error: ' + error);
            })
    };
    render() {
        return (
            <div class="row" style={{justifyContent: "center",margin:"5px 10px 0px 10px"}}>
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title"><i className='fa fa-fw fa-plus' style={{color:"silver",fontSize:"20pt"}}></i>Add New User</h3>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name : </label>
                                    <input type="text" class="form-control" ref={(c) => this.userName = c} id="exampleInputEmail1" placeholder="Enter User Name here . . ." name='userName'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email : </label>
                                    <input type="text" class="form-control" ref={(c) => this.userEmail = c} id="exampleInputPassword1" placeholder="Enter User Email here . . ." name='userEmail'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Role : </label>
                                    <input type="text" class="form-control" ref={(c) => this.userRole = c} id="exampleInputPassword1" placeholder="Enter User Role here . . ." name='userType'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Location : </label>
                                    <input type="text" class="form-control" ref={(c) => this.userLocation = c} id="exampleInputPassword1" placeholder="Enter Location here . . ." name='userDesc'/>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="button" onClick={this.onSubmit.bind(this)} class="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
