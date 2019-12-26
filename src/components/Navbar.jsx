// React
import React from "react";

// Material UI
import { makeStyles, useTheme, styled } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

// Images
import logo from "../assets/img/ico/logo.svg";
import facebook from "../assets/img/ico/facebook.svg";
import instagram from "../assets/img/ico/instagram.svg";
import { notEqual } from "assert";

const drawerWidth = 60;
const drawerItemWidth = drawerWidth;
const drawerItemHeight = drawerWidth + 2; // Compensación ocular

const useStyles = makeStyles(theme => ({
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

const MenuButton = styled(Button)({
  border: "1px solid transparent",
  color: "#4A4A4A",
  borderRadius: 4,
  height: 32,
  width: 200,
  padding: "0 10px",
  margin: "0 5px",
  textTransform: "capitalize",
  "&:hover": {
    background: "rgba(255, 253, 250, 0.4)",
    borderBottom: "2px solid white"
  }
});

export default function Navbar() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches === true) {
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <MenuButton color="primary">Quienes Somos</MenuButton>
          <MenuButton color="primary">Comités</MenuButton>
          <MenuButton color="primary">Costos</MenuButton>
          <MenuButton className={classes.signUp} color="primary">
            Inscribirse
          </MenuButton>
        </Toolbar>
      </AppBar>
    );
  } else {
    return <div></div>;
  }
}
