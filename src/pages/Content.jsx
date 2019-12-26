// React
import React from "react";

// Layout
import CommitteHead from "../layouts/Committee-head";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: "hidden",
    height: "100vh",
    width: "100%"
  }
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <div>
        <CommitteHead></CommitteHead>
        <CommitteHead></CommitteHead>
      </div>
    </div>
  );
}
