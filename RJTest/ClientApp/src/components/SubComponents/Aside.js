import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ViewLabs } from './ViewLabs';

export class Aside extends Component {
    static displayName = Aside.name;
    obj = new ViewLabs();
    labLocations = {};
    getLabLocations(){
        this.labLocations = this.obj.getLabs();
    }
    render() {
        return (
            <aside className='sidebarNavigation main-sidebar sidebar-dark elevation-4'>
                <a href="index3.html" class="brandLink">
                    <span class="brand-text font-weight-light">Inventory System</span>
                </a>
                <hr></hr>
                <div class="row">
                    <div className='imgLogo'>
                        {/* <h4>BIIT</h4> */}
                        <h6 style={{ textAlign: "center" }}>
                            Welcome Admin <small>Biit LMS</small>
                        </h6>
                    </div>
                </div>
                <hr></hr>
                <nav class="navbarAside">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item navActive" onClick={this.getLabLocations()}>
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    Locations
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/labs">Labs</Link>
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/locations">Offices</Link>
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/products">Products</Link>
                                </span>
                                <i class="fa fa-angle-down"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/categories">Categories</Link>
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/complaints">Complaints</Link>
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <span>
                                    <i class="nav-icon fa fa-th"></i>
                                    <Link to="/admin/users">Users</Link>
                                </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}