import React, { Component } from "react";

export class ViewLabs extends Component {
    static displayName = ViewLabs.name;
    constructor(props) {
        super(props);
        this.state = { labs: [] };
    }
    componentDidMount() {
        this.getLabs();
    }
    async getLabs() {
        const response = await fetch('https://localhost:44322/api/App/getLabs');
        const data = await response.json();
        this.setState({ labs: data });
    }
    static renderLabsTable(labItems) {
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
                    {labItems.map((labItems, index) =>
                        <tr key={labItems.labName}>
                            <td>{index + 1}</td>
                            <td>{labItems.labName}</td>
                            <td>{labItems.labType}</td>
                            <td style={{ textAlign: 'center' }}>{labItems.addedOn}</td>
                            <td style={{ textAlign: 'center' }}><i style={{ cursor: "pointer" }} className="fa fa-fw fa-pencil"></i><i style={{ cursor: "pointer" }} onClick={() => {
                                fetch('https://localhost:44322/api/App/deleteLab', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        labId: labItems.labId
                                    })
                                }).then(res => res.json()).then((res) => {
                                    this.response = res;
                                    if (this.response){
                                        alert('Location deleted Successfully !!');
                                        window.location.reload();
                                        //this.getLabs();
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
        let contents = ViewLabs.renderLabsTable(this.state.labs);
        return (
            <div>
                {contents}
            </div>
        );
    }

}