// React
import React from "react";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

// Images
import logo from "../assets/img/ico/logo.svg";
import facebook from "../assets/img/ico/facebook.svg";
import instagram from "../assets/img/ico/instagram.svg";

const drawerWidth = 60;
const drawerItemWidth = drawerWidth;
const drawerItemHeight = drawerWidth + 2; // Compensación ocular

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "column"
  },
  munumIcon: {
    width: drawerItemWidth,
    height: drawerItemHeight,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#0d133a"
    },
    "& img": {
      width: "100%"
    }
  },
  munumText: {
    textAlign: "center",
    justifyContent: "center",
    letterSpacing: "0.235em",
    wordWrap: "break-word",
    lineHeight: "20px"
  },
  munumSocial: {
    width: drawerItemWidth,
    height: drawerItemHeight,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "80%"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function Sidebar() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const drawer = (
    <div className={classes.drawer}>
      <List disablePadding>
        <ListItem button className={classes.munumIcon}>
          <img src={logo} alt="Logo" />
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem className={classes.munumText}>
          M<br />U<br />N<br />U<br />M<br />
          {/* <br />2<br />0<br />2<br />0<br /> */}
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem button className={classes.munumSocial}>
          <img src={facebook} alt="Facebook" />
        </ListItem>
        <ListItem button className={classes.munumSocial}>
          <img src={instagram} alt="Instagram" />
        </ListItem>
      </List>
    </div>
  );

  if (matches === true) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer variant="permanent" anchor="left">
          {drawer}
        </Drawer>
      </div>
    );
  } else {
    return <div></div>;
  }
}
