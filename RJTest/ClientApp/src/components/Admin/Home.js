import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../SubComponents/navBar';
import { ViewProducts } from '../SubComponents/ViewProducts';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div className="wrapper">
				<Navbar></Navbar>
				<aside className='sidebarNavigation main-sidebar sidebar-dark elevation-4'>
					<a href="index3.html" class="brandLink" style={{borderBottom: "2.5px solid #0b0b2e",paddingBottom:"7px",background:"#0b0b2e",color:"white"}}>
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
							<li class="nav-item navActive">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-tachometer"></i>
										Dashboard
									</span>
									<i class="fa fa-angle-right" style={{ color: "white" }}></i>
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
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-comments"></i>
										<Link to="/admin/complaints">Complaints</Link>
									</span>
									<i class="fa fa-angle-right"></i>
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
					<div class="row" style={{
						borderBottom: "1px solid lightgrey",
						borderTop: "1px solid lightgrey",
						padding: "10px",
						borderRadius: "3px"
					}}>
						<div class="col-3 customColCenter">
							<div className='dashboardCard bg-info'>
								<h4 style={{ float: "left", margin: "10px" }}>150</h4><span style={{ float: "right", marginRight: "10px" }}><i className='fa fa-shopping-bag'></i></span>
								<h6>Total Products</h6>
								<div className='cardFooter' style={{ backgroundColor: "#1593a7" }}>
									<p className='footerSpan'>More Info <i className='fa fa-arrow-circle-right'></i></p>
								</div>
							</div>
						</div>
						<div class="col-3 customColCenter">
							<div className='dashboardCard bg-success'>
								<h4 style={{ float: "left", margin: "10px" }}>150</h4><span style={{ float: "right", marginRight: "10px" }}><i className='fa fa-linode'></i></span>
								<h6>Used Products</h6>
								<div className='cardFooter' style={{ backgroundColor: "#279740" }}>
									<p className='footerSpan'>More Info <i className='fa fa-arrow-circle-right'></i></p>
								</div>
							</div>
						</div>
						<div class="col-3 customColCenter">
							<div className='dashboardCard bg-warning'>
								<h4 style={{ float: "left", margin: "10px" }}>150</h4><span style={{ float: "right", marginRight: "10px" }}><i className='fa fa-cubes'></i></span>
								<h6>In Stock</h6>
								<div className='cardFooter' style={{ backgroundColor: "#f1b910" }}>
									<p className='footerSpan'>More Info <i className='fa fa-arrow-circle-right'></i></p>
								</div>
							</div>
						</div>
						<div class="col-3 customColCenter">
							<div className='dashboardCard bg-danger'>
								<h4 style={{ float: "left", margin: "10px" }}>150</h4><span style={{ float: "right", marginRight: "10px" }}><i className='fa fa-chain-broken'></i></span>
								<h6>Damaged</h6>
								<div className='cardFooter' style={{ backgroundColor: "#cd2e3d" }}>
									<p className='footerSpan'>More Info <i className='fa fa-arrow-circle-right'></i></p>
								</div>
							</div>
						</div>
					</div>
					<div class="row adminDashboard">
						<div className='col-12'>
							<div className='card'>
								<div className='card-header'>
									<h5 style={{ color: "grey" }} className='card-title'>Stock Summary</h5>
								</div>
								<div className='card-body'>
									<ViewProducts></ViewProducts>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
