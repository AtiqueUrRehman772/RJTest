import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	static displayName = Navbar.name;

	render() {
		return (
			<nav class="main-header navbar navbar-expand navbar-dark" style={{ height: "50px", flexWrap: "nowrap" }}>
				<ul className="navbar-nav">
					<li className="nav-item d-none d-sm-inline-block">
						<a href="index3.html" style={{ color: "white" }} className="nav-link"><i className='fa fa-bars'></i></a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<a href="index3.html" style={{ color: "white" }} className="nav-link">Home</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<a href="index.html" style={{ color: "white" }} className="nav-link">Contact</a>
					</li>
				</ul>
				<ul className='navbar-nav'>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to={'/'} className="nav-link" style={{ color: "white" }}><i className='fa fa-power-off'></i></Link>
					</li>
				</ul>
			</nav>
		);
	}
}