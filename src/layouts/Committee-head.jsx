// React
import React from "react";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Components
import Scroll from "../components/Scroll";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  committeePresentation: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 80
  },
  committeeSGAName: {
    fontWeight: 500,
    textAlign: "right",
    fontSize: "0.9rem !important"
  },
  committeeSGAPosition: {
    fontWeight: 300,
    textAlign: "right",
    fontSize: "0.7rem !important"
  },
  headImage: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  "@media (max-width: 960px)": {
    committeePresentation: {
      padding: 20
    },
    headImage: {
      height: "100%"
    }
  }
}));

export default function CommitteeHead(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction={props.reverse ? "row-reverse" : null}>
        <Grid item sm={12} md={4} className={classes.committeePresentation}>
          <div></div>
          <Box>
            <Typography variant="h3" component="h2" align="left">
              {props.title}
            </Typography>
            <Typography variant="body1">{props.children}</Typography>
            <br />
            <Typography variant="body1" align="right" className={classes.committeeSGAName}>
              {props.who}
            </Typography>
            <Typography variant="body1" align="right" className={classes.committeeSGAPosition}>
              {props.position}
            </Typography>
          </Box>
          {props.scroll ? <Scroll color="black">para conocer los comités</Scroll> : null}
        </Grid>
        <Grid item sm={12} md={8}>
          <div className={classes.headImage}>
            <img src={props.image} alt={props.image} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
