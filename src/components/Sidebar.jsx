import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  AppBar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Toolbar, IconButton, Button, Drawer } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// import logo from "../assets/img/ico/logo.png";
// import home from "../assets/img/ico/home.svg";

const drawerWidth = 40;
const itemSize = 80;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "red"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function Sidebar(props) {
  const { container } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const drawer = (
    <div>
      <List>
        <ListItemIcon></ListItemIcon>
      </List>
      <List>
        <ListItem>
          <ListItemText>MUNUM</ListItemText>
        </ListItem>
      </List>
      <List>
        {["Facebook", "Instagram"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  if (matches === true) {
    return (
      <nav>
        <CssBaseline />
        <Drawer className={classes.drawer} variant="permanent" anchor="left">
          {drawer}
        </Drawer>
      </nav>
    );
  } else {
    return <div>Estas en modo responsive</div>;
  }
}
