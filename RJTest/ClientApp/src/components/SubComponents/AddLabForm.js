import React, { Component } from 'react';

export class AddLabForm extends Component {
    static displayName = AddLabForm.name;
    async onSubmit(e) {
        e.preventDefault();
        var labName = this.labName;
        var labType = this.labType;
        await this.addNewLab(labName.value, labType.value);
    }
    data = {};
    async addNewLab(labName, labType) {
        this.response = await fetch('https://localhost:44322/api/App/addlab', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                labName: labName,
                labType: labType,
            })
        }).then(res => res.json()).then((res) => {
            this.response = res;
            if (this.response)
                alert('Location Added Successfully !!');
        })
            .catch((error) => {
                console.log('error: ' + error);
            })
    };
    render() {
        return (
            <div class="row" style={{justifyContent: "center",margin:"150px 10px 0px 10px"}}>
                <div class="col-md-6">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title"><i className='fa fa-fw fa-plus' style={{color:"silver",fontSize:"20pt"}}></i>Add New Location</h3>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Location Name : </label>
                                    <input type="text" class="form-control" ref={(c) => this.labName = c} id="exampleInputEmail1" placeholder="e.g Lab-1" name='labName'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Location Type : </label>
                                    <input type="text" class="form-control" ref={(c) => this.labType = c} id="exampleInputPassword1" placeholder="Location Type" name='labType'/>
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
