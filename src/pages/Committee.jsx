// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Navbar from "../components/Navbar";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SGAs from "../layouts/SGAs";
import Onu from "../committees/Onu";

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: "hidden",
    height: "100vh",
    width: "100%"
  }
}));

export default function Committee() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <Route path="/committee" exact component={SGAs} />
      <Route path="/committee/onu" component={Onu} />
      <Route path="/committee/hola3" component={SGAs} />
    </div>
  );
}
