import React, { Component } from "react";

export class ViewProducts extends Component {
    static displayName = ViewProducts.name;
    constructor(props) {
        super(props);
        this.state = { prods: [],
            prodObj:{},
            prodsTable:true,
            editFrm:false
         };
    }
    componentDidMount() {
        this.getProducts();
    }
    async getProducts() {
        const response = await fetch('https://localhost:44322/api/App/getProducts');
        const data = await response.json();
        this.setState({ prods: data });
    }
    async onSubmit(e) {
        e.preventDefault();
        var prodName = this.prodName;
        var prodCompany = this.prodCompany;
        var prodQty = this.prodQty;
        var prodDesc = this.prodDesc;
        await this.addNewProd(prodName.value, prodCompany.value,prodQty.value,prodDesc.value);
    }
    showFrm(obj){
        this.setState({prodObj:obj});
        this.setState({prodsTable:false});
        this.setState({editFrm:true});
    }
    returnEditProdForm(){
        var obj = this.state.prodObj;
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
                                    <label for="exampleInputEmail1">Prodcut Name : </label>
                                    <input type="text" class="form-control" value={obj.name} ref={(c) => this.prodName = c} id="exampleInputEmail1" placeholder="e.g Mouse or Keyboard etc" name='prodName'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Company : </label>
                                    <input type="text" class="form-control" value={obj.company} ref={(c) => this.prodCompany = c} id="exampleInputPassword1" placeholder="Enter Company name here . . ." name='prodType'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Quantity : </label>
                                    <input type="number" class="form-control" value={obj.quantity} ref={(c) => this.prodQty = c} id="exampleInputPassword1" placeholder="Enter quantity here . . ." name='prodType'/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description : </label>
                                    <input type="text" class="form-control" value={obj.desc} ref={(c) => this.prodDesc = c} id="exampleInputPassword1" placeholder="Enter Description here . . ." name='prodDesc'/>
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
    renderProdsTable(prodItems) {
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
                        <th>Comapny</th>
                        <th>Stock</th>
                        <th>Added On</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prodItems.map((prodItems,index) =>
                        <tr key={prodItems.id}>
                            <td>{index+1}</td>
                            <td>{prodItems.name}</td>
                            <td>{prodItems.company}</td>
                            <td style={{textAlign:'center' }}>{prodItems.quantity}</td>
                            <td style={{textAlign:'center' }}>{prodItems.addedOn}</td>
                            <td>{prodItems.desc}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-info"><i style={{color:prodItems.color}} className={prodItems.icon}></i>{prodItems.status}</button>
                            </td>
                            <td style={{textAlign:'center' }}><i className={prodItems.icon} style={{cursor:"pointer"}}></i><i className="fa fa-fw fa-pencil" onClick={()=>{
                                var obj = {
                                    id : prodItems.id,
                                    name : prodItems.name,
                                    company : prodItems.company,
                                    quantity : prodItems.quantity,
                                    date : prodItems.addedOn,
                                    desc : prodItems.desc,
                                    status : prodItems.status
                                }
                                this.showFrm(obj);
                            }} style={{cursor:"pointer"}}></i><i className="fa fa-fw fa-trash" style={{cursor:"pointer"}} onClick={() => {
                                fetch('https://localhost:44322/api/App/deleteProduct', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        id: prodItems.id
                                    })
                                }).then(res => res.json()).then((res) => {
                                    this.response = res;
                                    if (this.response){
                                        this.getProducts();
                                    alert('Product deleted Successfully !!');
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
        let contents = this.state.prodsTable === true
			? this.renderProdsTable(this.state.prods)
			: this.returnEditProdForm();
        return (
            <div>
                {contents}
            </div>
        );
    }

}