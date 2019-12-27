// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Navbar from "../components/Navbar";
import CommitteHead from "../layouts/Committee-head";
import Munum from "../layouts/Munum";
import SGAs from "../layouts/SGAs";

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
        <Munum></Munum>
        <SGAs></SGAs>
        <CommitteHead></CommitteHead>
      </div>
    </div>
  );
}
