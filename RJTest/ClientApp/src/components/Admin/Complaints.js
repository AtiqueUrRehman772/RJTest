import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../SubComponents/navBar';

export class Complaints extends Component {
	static displayName = Complaints.name;

	render() {
		return (
			<div className="wrapper">
				<Navbar></Navbar>
				<aside className='sidebarNavigation main-sidebar sidebar-dark elevation-4'>
					<a href="index3.html" class="brandLink" style={{ borderBottom: "2.5px solid #0b0b2e", paddingBottom: "7px", background: "#0b0b2e", color: "white" }}>
						<span class="brand-text font-weight-light">Inventory System</span>
					</a>
					<div class="row">
						<div className='imgLogo'>
							<img src={window.location.origin + '/img/biitlogo.png'} />
							<h6 style={{ textAlign: "center" }}>
								Welcome Admin <small>Biit LMS</small>
							</h6>
						</div>
					</div>
					<hr></hr>
					<nav class="navbarAside">
						<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-tachometer"></i>
										<Link to="/admin/homepage">Dashboard</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-map-marker"></i>
										<Link to="/admin/locations">Locations</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-barcode"></i>
										<Link to="/admin/products">Products</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-list-alt"></i>
										<Link to="/admin/categories">Categories</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
							<li class="nav-item navActive">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-comments"></i>
										Complaints
									</span>
									<i class="fa fa-angle-right" style={{ color: "white"}}></i>
								</a>
							</li>
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-users"></i>
										<Link to="/admin/users">Users</Link>
									</span>
									<i class="fa fa-angle-right"></i>
								</a>
							</li>
						</ul>
					</nav>
				</aside>
				<div class='containerPage'>
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
