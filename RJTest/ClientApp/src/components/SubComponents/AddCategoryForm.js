import React, { Component } from 'react';

export class AddCategoryForm extends Component {
    static displayName = AddCategoryForm.name;
    async onSubmit(e) {
        e.preventDefault();
        var categoryName = this.categoryName;
        var categoryType = this.categoryType;
        await this.addNewcategory(categoryName.value, categoryType.value);
    }
    data = {};
    async addNewCategory(categoryName, categoryType) {
        this.response = await fetch('https://localhost:44322/api/App/addCategory', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryName: categoryName,
                categoryType: categoryType,
            })
        }).then(res => res.json()).then((res) => {
            this.response = res;
            if (this.response)
                alert('Category Added Successfully !!');
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
                            <h3 class="card-title"><i className='fa fa-fw fa-plus' style={{color:"silver",fontSize:"20pt"}}></i>Add New Category</h3>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <categoryel for="exampleInputEmail1">Location Name : </categoryel>
                                    <input type="text" class="form-control" ref={(c) => this.categoryName = c} id="exampleInputEmail1" placeholder="e.g category-1" name='categoryName'/>
                                </div>
                                <div class="form-group">
                                    <categoryel for="exampleInputPassword1">Location Type : </categoryel>
                                    <input type="text" class="form-control" ref={(c) => this.categoryType = c} id="exampleInputPassword1" placeholder="Category Type" name='categoryType'/>
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
