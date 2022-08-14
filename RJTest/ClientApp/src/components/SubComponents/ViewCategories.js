import React, { Component } from "react";

export class ViewCategories extends Component {
    static displayName = ViewCategories.name;
    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }
    componentDidMount() {
        this.getCategories();
    }
    async getCategories() {
        const response = await fetch('https://localhost:44322/api/App/getcategories');
        const data = await response.json();
        this.setState({ categories: data });
    }
    static renderCategoriesTable(categoryItems) {
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
                        <th>Type</th>
                        <th>Added On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryItems.map((categoryItems, index) =>
                        <tr key={categoryItems.categoryName}>
                            <td>{index + 1}</td>
                            <td>{categoryItems.categoryName}</td>
                            <td>{categoryItems.categoryType}</td>
                            <td style={{ textAlign: 'center' }}>{categoryItems.addedOn}</td>
                            <td style={{ textAlign: 'center' }}><i style={{ cursor: "pointer" }} className="fa fa-fw fa-pencil"></i><i style={{ cursor: "pointer" }} onClick={() => {
                                fetch('https://localhost:44322/api/App/deletecategory', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        categoryId: categoryItems.categoryId
                                    })
                                }).then(res => res.json()).then((res) => {
                                    this.response = res;
                                    if (this.response){
                                        alert('Location deleted Successfully !!');
                                        window.location.reload();
                                    }
                                })
                                    .catch((error) => {
                                        console.log('error: ' + error);
                                    })
                            }} className="fa fa-fw fa-trash"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = ViewCategories.renderCategoriesTable(this.state.categories);
        return (
            <div>
                {contents}
            </div>
        );
    }

}