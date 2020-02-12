import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon, 
  FormatSize as TypographyIcon, 
  BorderAll as TableIcon,  
  ArrowBack as ArrowBackIcon,
  Place as LocationIcon,
  Contacts as UsersIcon,
  People as VendorClientIcon,
  ShoppingCart as ProductsIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";


// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Indent",
    link: "/app/indent/CreateIndent",
    icon: <TypographyIcon />,
    children: [
      { label: "Create Indent", link: "/app/indent/CreateIndent" },
      { label: "Indent List", link: "/app/indent/IndentList" },      
    ],
  },
  { id: 2,
     label: "Return Indent",
      link: "/app/returnIndent/CreateReturn",
       icon: <TableIcon />,
       children: [
        { label: "Create RI", link: "/app/returnIndent/CreateReturn" },
        { label: "RI List", link: "/app/returnIndent/ReturnList" },      
      ],
      },
  {
    id: 3,
    label: "Users",
    link: "/app/users/CreateUser",
    icon: <UsersIcon />,
    children: [
      { label: "Create User", link: "/app/users/CreateUser" },
      { label: "Users list", link: "/app/users/UsersList" },      
    ],
  },
  {
  id: 6,
    label: "Vendors/Clients",
    link: "/app/vendorsClients/VendorClient",
    icon: <VendorClientIcon />,
    children: [
      
      { label: "Create V/C", link: "/app/vendorsClients/VendorClient" },      
      { label: "V/C List", link: "/app/vendorsClients/VendorClientList" },
      
    ],
  },
  {
    id: 4,
    label: "Products",
    link: "/app/products/RegisterProduct",
    icon: <ProductsIcon />,
    children: [
      { label: "Register Product", link: "/app/products/RegisterProduct" },
      // { label: "Edit Product", link: "/app/products/EditProduct" },
      { label: "Product list", link: "/app/products/ProductList" },
    ],
  },
  {
    id: 5,
    label: "Location",
    link: "app/location/CreateLocation",
    icon: <LocationIcon />,
    children: [
      { label: "Create", link: "/app/location/CreateLocation" },
      { label: "Location List", link: "/app/location/LocationList" }
   
    ],
  }
  
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
