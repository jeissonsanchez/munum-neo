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

const drawerWidth = 60;
const drawerItemWidth = drawerWidth;
const drawerItemHeight = drawerWidth + 2; // Compensación ocular

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
    background: "rgba(255, 253, 250, 0.4) !important",
    border: "1px solid white !important",
    color: "black !important",
    "&:hover": {
      background: "rgba(255, 253, 250, 0.4)",
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
  borderRadius: 4,
  height: 32,
  width: 150,
  padding: "0 20px",
  margin: "0 10px",
  textTransform: "capitalize",
  "&:hover": {
    background: "rgba(255, 253, 250, 0.4)",
    borderBottom: "2px solid white"
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
          <MenuButton color="primary">MUNUM'20</MenuButton>
          <MenuButton color="primary">Comités</MenuButton>
          <MenuButton color="primary">Costos</MenuButton>
          <MenuButton className={webClasses.signUp} color="primary">
            Inscribirse
          </MenuButton>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <div className={mobileClasses.nav}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Munum" icon={<HomeIcon />} />
          <BottomNavigationAction label="Comités" icon={<AccountBalanceIcon />} />
          <BottomNavigationAction label="Costos" icon={<MonetizationOnIcon />} />
          <BottomNavigationAction label="Inscribirse" icon={<ExitToAppIcon />} />
        </BottomNavigation>
        {/* {webNavbar} */}
      </div>
    );
  }
}
