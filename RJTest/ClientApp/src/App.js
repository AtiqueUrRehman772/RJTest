import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Admin/Home';
import { Products } from './components/Admin/Products';
import { Offices } from './components/Admin/Offices';
import { Location } from './components/Admin/Locations';
import { Categories } from './components/Admin/Categories';
import { Complaints } from './components/Admin/Complaints';
import { Users } from './components/Admin/Users';
import { Login } from './components/Login';
////// Lab Admin Imports  ///////////
import {LabAdminComplaints} from './components/LabAdministrator/LabAdminComplaints';
import {LabAdminLocations} from './components/LabAdministrator/LabAdminLocations';
import {LabAdminProducts} from './components/LabAdministrator/LabAdminProducts';
import {LabAdminTasks} from './components/LabAdministrator/LabAdminTasks';
////// Lab Assisstant Imports ////////
import {LabAssisstTask} from './components/LabAssisstant/LabAssisstTasks';
import {LabAssisstProduct} from './components/LabAssisstant/LabAssisstProducts';
import {LabAssisstLocation} from './components/LabAssisstant/LabAssisstLocations';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/admin/homepage" component={Home}/>
          {/* <Route path="/admin/locations" component={Home}/> */}
          <Route path="/admin/products" component={Products}/>
          <Route path="/admin/offices" component={Offices}/>
          <Route path="/admin/locations" component={Location}/>
          <Route path="/admin/categories" component={Categories}/>
          <Route path="/admin/complaints" component={Complaints}/>
          <Route path="/admin/users" component={Users}/>
          <Route path="/labadmin/locations" component={LabAdminLocations}/>
          <Route path="/labadmin/complaints" component={LabAdminComplaints}/>
          <Route path="/labadmin/products" component={LabAdminProducts}/>
          <Route path="/labadmin/tasks" component={LabAdminTasks}/>
          <Route path="/labassisst/locations" component={LabAssisstLocation}/>
          <Route path="/labassisst/products" component={LabAssisstProduct}/>
          <Route path="/labassisst/tasks" component={LabAssisstTask}/>
        </Switch>
      </Router>      
    );
  }
}