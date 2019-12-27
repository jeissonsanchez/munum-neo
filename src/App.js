import React from "react";

import Sidebar from "./components/Sidebar";
import Content from "./pages/Content";

// Material UI
import { makeStyles, StylesProvider, withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    flexFlow: "row nowrap"
  }
}));

const GlobalCSS = withStyles({
  "@global": {
    ".MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6": {
      fontWeight: 900,
      letterSpacing: "0.235em"
    },
    ".MuiTypography-h1, .MuiTypography-h2": {
      fontFamily: "LemonMilk"
    },
    ".MuiTypography-h3": {
      fontSize: "2rem",
      lineHeight: "2rem",
      paddingBottom: "7px"
    },
    ".MuiTypography-body1": {
      fontSize: "0.9rem",
      lineHeight: "200%"
    }
  }
})(() => null);

function App() {
  const classes = useStyles();

  return (
    <div>
      <StylesProvider>
        <GlobalCSS />
      </StylesProvider>
      <div className={classes.layout}>
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
