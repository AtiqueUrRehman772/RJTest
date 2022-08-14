import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../SubComponents/navBar';

export class LabAdminComplaints extends Component {
	static displayName = LabAdminComplaints.name;

	render() {
		return (
			<div className="wrapper">
				<Navbar></Navbar>
				<aside className='sidebarNavigation main-sidebar sidebar-dark elevation-4'>
					<a href="index3.html" class="brandLink">
						<span class="brand-text font-weight-light">Inventory System</span>
					</a>
					<hr></hr>
					<div class="row">
						<div className='imgLogo'>
							<h4>BIIT</h4>
							<h6 style={{ textAlign: "center" }}>
								Welcome Lab Admin <small>Biit LMS</small>
							</h6>
						</div>
					</div>
					<hr></hr>
					<nav class="navbarAside">
						<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-th"></i>
										<Link to="/labadmin/locations">Locations</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-th"></i>
										<Link to="/labadmin/products">Products</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-th"></i>
										<Link to="/labadmin/tasks">Tasks</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item navActive">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-th"></i>
										Complaints
									</span>
									<i class="fa fa-angle-down"></i>
								</a>
							</li>
						</ul>
					</nav>
				</aside>
				<div class='containerPage'>
					<h4 style={{ color: "grey" }}>Complaints</h4>
					<div class="row" style={{
						borderBottom: "1px solid lightgrey",
						padding: "10px",
						borderRadius: "3px"
					}}>
						<div className='col-1'></div>
						<div class="col-2 customColCenter">
							<button class='btn btn-primary'>View Products</button>
						</div>
						<div class="col-2 customColCenter">
							<button class='btn btn-primary'>Add Products</button>
						</div>
						<div class="col-2 customColCenter">
							<button class='btn btn-primary'>Change Status</button>
						</div>
						<div class="col-3 customColCenter">
							<button class='btn btn-primary'>Change Quantity</button>
						</div>
						<div class="col-2">
						</div>
					</div>
					<div class="row">
						<table class="dataTable" style={{
							width: '90%',
							margin: "45px"
						}}>
							<thead>
								<tr style={{ padding: "10px", textAlign: 'center' }}>
									<th style={{ border: "1.5px solid grey", padding: "10px" }}>Sr.</th>
									<th style={{ border: "1.5px solid grey", padding: "10px" }}>Lab no.</th>
									<th style={{ border: "1.5px solid grey", padding: "10px" }}>Assets</th>
									<th style={{ border: "1.5px solid grey", padding: "10px" }}>Supervisor</th>
									<th style={{ border: "1.5px solid grey", padding: "10px" }}>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr style={{ border: "1px solid lightgrey", padding: "10px" }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
								<tr style={{ border: "1px solid lightgrey", padding: "10px" }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
								<tr style={{ border: "1px solid lightgrey", padding: "10px" }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
								<tr style={{ border: "1px solid", padding: '10px' }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
								<tr style={{ border: "1px solid", padding: "10px" }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
								<tr style={{ border: "1px solid", padding: "10px" }}>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>1</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>5</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Computers</td>
									<td style={{ border: "1px solid lightgrey", padding: "10px" }}>Ali</td>
									<td style={{ border: "1px solid lightgrey", textAlign: 'center', padding: "10px" }}><i class="fa fa-fw fa-info-circle"></i><i class="fa fa-fw fa-trash"></i></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
