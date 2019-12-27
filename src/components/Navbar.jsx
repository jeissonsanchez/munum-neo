// React
import React from "react";

// Material UI
import { makeStyles, useTheme, styled } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, MenuList, MenuItem, Typography, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// Images
import logo from "../assets/img/ico/logo.svg";
import facebook from "../assets/img/ico/facebook.svg";
import instagram from "../assets/img/ico/instagram.svg";
import { notEqual } from "assert";

// Route
import { Link } from "react-router-dom";

const drawerWidth = 60;

const webStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    height: 62
  },
  toolbar: {
    justifyContent: "flex-end"
  },
  signUp: {
    background: "rgba(251, 140, 37, 0.4) !important",
    border: "1px solid #FB8C25 !important",
    color: "black !important",
    "&:hover": {
      color: "#4A4A4A !important",
      borderBottom: "2px solid white"
    }
  }
}));

const mobileStyles = makeStyles(theme => ({
  nav: {
    width: "100%",
    position: "fixed",
    border: "1px solid #f5a333",
    bottom: 0,
    zIndex: 9999
  }
}));

const MenuButton = styled(Button)({
  border: "1px solid transparent",
  color: "#4A4A4A",
  height: 32,
  width: 150,
  padding: "0 20px",
  margin: "0 10px",
  textTransform: "capitalize",
  "&:hover": {
    background: "rgba(255, 253, 250, 0.4)",
    borderBottom: "2px solid #FB8C25"
  }
});

export default function Navbar() {
  const theme = useTheme();
  const webClasses = webStyles();
  const mobileClasses = mobileStyles();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  if (matches === true) {
    return (
      <AppBar className={webClasses.appBar}>
        <Toolbar className={webClasses.toolbar}>
          <Link to="/">
            <MenuButton color="primary">MUNUM'20</MenuButton>
          </Link>
          <Link to="/committee">
            <MenuButton color="primary">Comités</MenuButton>
          </Link>
          <Link to="/pricing">
            <MenuButton color="primary">Costos</MenuButton>
          </Link>
          <Link to="/signUp">
            <MenuButton className={webClasses.signUp} color="primary">
              Inscribirse
            </MenuButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <div className={mobileClasses.nav}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Munum" icon={<HomeIcon />} component={Link} to="/" />
          <BottomNavigationAction label="Comités" icon={<AccountBalanceIcon />} component={Link} to="/committee" />
          <BottomNavigationAction label="Costos" icon={<MonetizationOnIcon />} component={Link} to="/pricing" />
          <BottomNavigationAction label="Inscribirse" icon={<ExitToAppIcon />} component={Link} to="/signUp" />
        </BottomNavigation>
        {/* {webNavbar} */}
      </div>
    );
  }
}
