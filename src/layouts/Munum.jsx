// React
import React from "react";
import campus from "../assets/img/bg/campus2.jpg";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box } from "@material-ui/core";

// Components
import Scroll from "../components/Scroll";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    width: "100%"
    // backgroundImage: `url(${campus})`
    // backgroundColor: "rgb(255,250,210)"
  }
}));

export default function CommitteeHead() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box></Box>
      <Box>
        <Typography variant="h1" align="center">
          MUNUM
        </Typography>
        <Typography variant="h2" align="center">
          2020
        </Typography>
      </Box>
      <Scroll color="black">para conocer más sobre MUNUM'20</Scroll>
    </div>
  );
}
