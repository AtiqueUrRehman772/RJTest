import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../SubComponents/navBar';
import { AddProductForm } from '../SubComponents/AddProductForm';
import { ViewProducts } from '../SubComponents/ViewProducts';

export class Products extends Component {
	static displayName = Products.name;
	constructor(props) {
		super(props);
		this.state = {
			showProdsTbl: true,
			addProdfrm: false,
			showLoader: true
		};
	}
	loadershow() {
		setTimeout(function () { //Start the timer
			this.setState({ showLoader: false }) //After 1 second, set render to true
		}.bind(this), 800);
	}
	returnAddNewProd() {
		return (
			<div>
				<div className='backArrow' onClick={()=>{
					this.setState({ showProdsTbl: true });
					this.setState({ addProdfrm: false });
				}}>
					<i className='fa fa-fw fa-arrow-left'></i>
				</div>
				<AddProductForm></AddProductForm>
			</div>
		);
	}
	returnViewProds() {
		this.loadershow();

		return (
			<div className='card'>
				<div className='card-header'>
					<h5 style={{ color: "grey", float: "left" }} className='card-title'>Stock Summary</h5>
					<i style={{ fontSize: "14pt", cursor: "pointer", float: "right", opacity: "0.85" }} onClick={() => { this.hideProdsTable() }} className='fa fa-fw fa-plus-circle'></i>
				</div>
				<div className='card-body' style={{
					overflow:"-moz-hidden-scrollable",
					overflow:"auto",
					maxHeight:"74vh"
				}}>
					<ViewProducts></ViewProducts>
				</div>
			</div>
		);
	}
	hideProdsTable() {
		this.setState({ showProdsTbl: false });
		this.setState({ addProdfrm: true });
	}
	render() {
		let loader = this.state.showLoader === true
			? <span className='divRotate'>
				<i className='fa fa-3x fa-spin fa-spinner'></i>
			</span>
			: this.state.showLoader = false;
		let viewprodvar = this.state.showProdsTbl === false
			? <span></span>
			: this.returnViewProds();
		let addprodvar = this.state.addProdfrm === false ? <span></span>
			: this.returnAddNewProd();
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
							<li class="nav-item navActive">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-barcode"></i>
										Products
									</span>
									<i class="fa fa-angle-right" style={{ color: "white" }}></i>
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
						marginTop: "100px"
					}}>
						<div className='col-12' style={{ textAlign: "left" }}>
							{loader}
							{viewprodvar}
							{addprodvar}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
