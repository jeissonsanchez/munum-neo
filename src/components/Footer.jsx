// React
import React from "react";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#424242",
    padding: "30px 30px 60px 30px",
    color: "white"
  }
}));

export default function Footer() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        MUNUM
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Una versión diferente a cada quien
      </Typography>
    </footer>
  );
}
