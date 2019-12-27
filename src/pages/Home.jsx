// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Navbar from "../components/Navbar";
import Munum from "../layouts/Munum";
import CommitteeHead from "../layouts/Committee-head";

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: "hidden",
    height: "100vh",
    width: "100%"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <div>
        <Munum></Munum>
        <CommitteeHead></CommitteeHead>
      </div>
    </div>
  );
}
