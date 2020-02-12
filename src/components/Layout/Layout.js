import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import CreateIndent from "../../pages/indent/CreateIndent";
import IndentList from "../../pages/indent/IndentList";
import CreateReturn from "../../pages/returnIndent/CreateReturn";
import ReturnList from "../../pages/returnIndent/ReturnList";
import RegisterProduct from "../../pages/products/RegisterProduct";
import EditProduct from "../../pages/products/EditProduct";
import ProductList from "../../pages/products/ProductList";
import CreateUser from "../../pages/users/CreateUser";
import EditUser from "../../pages/users/EditUser";
import UsersList from "../../pages/users/UsersList";
import VendorClient from "../../pages/vendorsClients/VendorClient";
import VendorClientList from "../../pages/vendorsClients/VendorClientList";
import EditVendorClient from  "../../pages/vendorsClients/EditVendorClient";

import CreateLocation from "../../pages/location/CreateLocation";
import LocationList from "../../pages/location/LocationList";
import EditLocation from "../../pages/location/EditLocation";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
             
             <Route path="/app/products/registerProduct" component={RegisterProduct} /> 
             <Route path="/app/products/UpdateProduct/:id" component={EditProduct} />
             <Route path="/app/products/ProductList" component={ProductList} />

             <Route path="/app/users/CreateUser" component={CreateUser} />
             <Route path="/app/users/:id" component={EditUser} />
             <Route path="/app/users/UsersList" component={UsersList} />

             <Route path="/app/vendorsClients/VendorClient" component={VendorClient} />
             <Route path="/app/vendorsClients/VendorClientList" component={VendorClientList} />
             <Route path="/app/vendorsClients/UpdateVendorClient/:id" component={EditVendorClient} />

             <Route path="/app/location/CreateLocation" component={CreateLocation} />
             <Route path="/app/location/LocationList" component={LocationList} />
             <Route path="/app/location/UpdateLocation/:id" component={EditLocation} />

             <Route path="/app/indent/CreateIndent" component={CreateIndent} />
             <Route path="/app/indent/IndentList" component={IndentList} />

             
             
             
              
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
