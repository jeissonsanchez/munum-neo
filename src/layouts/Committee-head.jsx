// React
import React from "react";
import santiago from "../assets/img/images/santiago.jpg";

// Material UI
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    "& img": {
      height: "100%",
      right: 0
    }
  },
  scroll: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center"
  },
  instruction: {
    margin: 10,
    lineHeight: 1.5,
    "&>span": {
      textTransform: "lowercase"
    }
  },
  scrollDown: {
    width: 50,
    height: 80,
    borderRadius: 25,
    background: "transparent",
    border: "2px solid black",
    overflow: "hidden"
  }
}));

export default function CommitteeHead() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={4} className={classes.committeePresentation}>
          <Box>
            <Typography variant="h3" component="h2" align="left">
              NACIONES <br />
              UNIDAS
            </Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at, nobis ratione necessitatibus excepturi quod culpa distinctio delectus iure? Libero natus nesciunt blanditiis animi provident similique quia possimus earum nisi?</Typography>
            <br />
            <Typography variant="body1" align="right" className={classes.committeeSGAName}>
              Jeisson Fabián Sánchez Gutiérrez
            </Typography>
            <Typography variant="body1" align="right" className={classes.committeeSGAPosition}>
              SGA de Naciones Unidas MUNUM’20
            </Typography>
          </Box>
          <Box className={classes.scroll}>
            <div className={classes.scrollDown}></div>
            <Typography variant="overline" align="center">
              <div className={classes.instruction}>
                <b>Scroll </b> <br />
                <span>para conocer los comités</span>
              </div>
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={8}>
          <div className={classes.headImage}>
            <img src={santiago} alt="santiago" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
