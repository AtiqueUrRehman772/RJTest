import React, { Component } from 'react';

export class AddProductForm extends Component {
    static displayName = AddProductForm.name;
    async onSubmit(e) {
        e.preventDefault();
        var prodName = this.prodName;
        var prodCompany = this.prodCompany;
        var prodQty = this.prodQty;
        var prodDesc = this.prodDesc;
        await this.addNewProd(prodName.value, prodCompany.value,prodQty.value,prodDesc.value);
    }
    data = {};
    async addNewProd(prodName, prodCompany,prodQty,prodDesc) {
        this.response = await fetch('https://localhost:44322/api/App/addProduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: prodName,
                Company: prodCompany,
                Quantity: prodQty,
                Desc: prodDesc
            })
        }).then(res => res.json()).then((res) => {
            this.response = res;
            if (this.response)
                alert('Product Added Successfully !!');
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
                            <h3 class="card-title"><i className='fa fa-fw fa-plus' style={{color:"silver",fontSize:"20pt"}}></i>Add New Product</h3>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Prodcut Name : </label>
                                    <input type="text" class="form-control" ref={(c) => this.prodName = c} id="exampleInputEmail1" placeholder="e.g Mouse or Keyboard etc" name='prodName'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Company : </label>
                                    <input type="text" class="form-control" ref={(c) => this.prodCompany = c} id="exampleInputPassword1" placeholder="Enter Company name here . . ." name='prodType'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Quantity : </label>
                                    <input type="number" class="form-control" ref={(c) => this.prodQty = c} id="exampleInputPassword1" placeholder="Enter quantity here . . ." name='prodType'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description : </label>
                                    <input type="text" class="form-control" ref={(c) => this.prodDesc = c} id="exampleInputPassword1" placeholder="Enter Description here . . ." name='prodDesc'/>
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
