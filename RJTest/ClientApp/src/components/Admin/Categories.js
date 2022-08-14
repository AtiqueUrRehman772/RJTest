import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../SubComponents/navBar';
import { ViewCategories } from '../SubComponents/ViewCategories';
import { AddCategoryForm } from '../SubComponents/AddCategoryForm';

export class Categories extends Component {
	static displayName = Categories.name;

	constructor(props) {
		super(props);
		this.state = {
			showCategoriestbl: true,
			addCategoryfrm: false,
			showLoader: true
		};
	}
	getCategoryLocations() {
		this.returnViewCategories();
		this.setState({ addCategoryfrm: false });
		this.setState({ showCategoriestbl: true });
	}
	returnViewCategories() {
		this.loadershow();
		return (
			<div className='card' style={{marginTop:"100px"}}>
				<div className='card-header'>
					<h5 style={{ color: "grey", float: "left" }} className='card-title'>Locations</h5>
					<i style={{ fontSize: "14pt", cursor: "pointer", float: "right", opacity: "0.85" }} onClick={() => { this.hideCategoriesTable() }} className='fa fa-fw fa-plus-circle'></i>
				</div>
				<div className='card-body' style={{
					overflow:"-moz-hidden-scrolcategoryle",
					overflow:"auto",
					maxHeight:"74vh"
				}}>
					<ViewCategories></ViewCategories>
				</div>
			</div>
		);
	}
	returnAddNewCategory() {
		return (
			<div>
				<div className='backArrow' style={{ paddingLeft: "140px" }} onClick={() => {
					this.setState({ showCategoriestbl: true });
					this.setState({ addCategoryfrm: false });
				}}>
					<i className='fa fa-fw fa-arrow-left'></i>
				</div>
				<AddCategoryForm></AddCategoryForm>
			</div>
		);
	}
	hideCategoriesTable() {
		this.setState({ showCategoriestbl: false });
		this.setState({ addCategoryfrm: true });
	}
	loadershow() {
		setTimeout(function () { //Start the timer
			this.setState({ showLoader: false }) //After 1 second, set render to true
		}.bind(this), 800);
	}

	render() {
		let loader = this.state.showLoader === true
			? <span className='divRotate' style={{ paddingRight: "220px" }}>
				<i className='fa fa-3x fa-spin fa-spinner'></i>
			</span>
			: this.state.showLoader = false;
		let viewCategoriesvar = this.state.showCategoriestbl === false
			? this.state.addCategoryfrm = true
			: this.returnViewCategories();
		let addCategoriesvar = this.state.addCategoryfrm === false ? <span></span>
			: this.returnAddNewCategory();
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
							<li class="nav-item navActive">
								<a href="#" class="nav-link">
									<span>
										<i class="nav-icon fa fa-list-alt"></i>
										Categories
									</span>
									<i class="fa fa-angle-right" style={{ color: "white" }}></i>
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
					{loader}
					{viewCategoriesvar}
					{addCategoriesvar}
				</div>
			</div>
		);
	}
}
