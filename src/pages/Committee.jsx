// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SGAs from "../committees/SGAs";
import Onu from "../committees/Onu";
import Regionales from "../committees/Regionales";
import Crisis from "../committees/Crisis";
import Colombianos from "../committees/Colombianos";
import Interconexion from "../committees/Interconexion";

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
      <Route path="/committee/regionales" component={Regionales} />
      <Route path="/committee/crisis" component={Crisis} />
      <Route path="/committee/colombianos" component={Colombianos} />
      <Route path="/committee/interconexion" component={Interconexion} />
      <Footer></Footer>
    </div>
  );
}
