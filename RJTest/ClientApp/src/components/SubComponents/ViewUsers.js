import React, { Component } from "react";

export class ViewUsers extends Component {
    static displayName = ViewUsers.name;
    constructor(props) {
        super(props);
        this.state = { users: [],
            userObj:{},
            userTable:true,
            editFrm:false
         };
    }
    componentDidMount() {
        this.getUsers();
    }
    async getUsers() {
        const response = await fetch('https://localhost:44322/api/App/getUsers');
        const data = await response.json();
        this.setState({ users: data });
    }
    async onSubmit(e) {
        e.preventDefault();
        var userName = this.userName;
        var userEmail = this.userEmail;
        var role = this.role;
        var location = this.location;
        await this.addNewUser(userName.value, userEmail.value,role.value,location.value);
    }
    showFrm(obj){
        this.setState({userObj:obj});
        this.setState({userTable:false});
        this.setState({editFrm:true});
    }
    returnEditUserForm(){
        var obj = this.state.userObj;
        return(
            <div class="row" style={{justifyContent: "center",margin:"5px 10px 0px 10px"}}>
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title"><i className='fa fa-fw fa-pencil' style={{color:"grey",fontSize:"20pt"}}></i>Edit Product</h3>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User Name : </label>
                                    <input type="text" class="form-control" value={obj.userName} ref={(c) => this.userName = c} id="exampleInputEmail1" placeholder="Enter User Name here . . ." name='userName'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email : </label>
                                    <input type="text" class="form-control" value={obj.userEmail} ref={(c) => this.userEmail = c} id="exampleInputPassword1" placeholder="Enter User Email here . . ." name='userEmail'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Role : </label>
                                    <input type="text" class="form-control" value={obj.UserRole} ref={(c) => this.role = c} id="exampleInputPassword1" placeholder="Enter User Role here . . ." name='role'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Location : </label>
                                    <input type="text" class="form-control" value={obj.location} ref={(c) => this.location = c} id="exampleInputPassword1" placeholder="Enter Location here . . ." name='location'/>
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
    renderUsersTable(userItems) {
        console.log(userItems);
        return (
            <table class="table table-bordered table-hover dataTable dtr-inline" style={{
                width: '90%',
                margin: "0px 45px 0px 45px"
            }}>
                <thead style={{
                    background: "#0b0b2e",
                    color: "white"
                }}>
                    <tr style={{ padding: "10px", textAlign: 'center' }}>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Added On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userItems.map((userItems,index) =>
                        <tr key={userItems.id}>
                            <td>{index+1}</td>
                            <td>{userItems.userName}</td>
                            <td>{userItems.userEmail}</td>
                            <td>{userItems.userRole}</td>
                            <td>{userItems.location}</td>
                            <td style={{textAlign:'center' }}>{userItems.date}</td>
                            <td style={{textAlign:'center' }}><i className="fa fa-fw fa-pencil" onClick={()=>{
                                var obj = {
                                    id : userItems.id,
                                    userName : userItems.userName,
                                    userEmail : userItems.userEmail,
                                    role : userItems.userRole,
                                    location : userItems.location
                                }
                                this.showFrm(obj);
                            }} style={{cursor:"pointer"}}></i><i className="fa fa-fw fa-trash" style={{cursor:"pointer"}} onClick={() => {
                                fetch('https://localhost:44322/api/App/deleteUser', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        id: userItems.id
                                    })
                                }).then(res => res.json()).then((res) => {
                                    this.response = res;
                                    if (this.response){
                                        this.getUsers();
                                    alert('User deleted Successfully !!');
                                    }
                                })
                                    .catch((error) => {
                                        console.log('error: ' + error);
                                    })
                            }} ></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.userTable === true
			? this.renderUsersTable(this.state.users)
			: this.returnEditUserForm();
        return (
            <div>
                {contents}
            </div>
        );
    }

}