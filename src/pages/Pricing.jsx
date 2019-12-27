// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box, Card, CardMedia, CardContent, CardActionArea } from "@material-ui/core";

// Components
import Navbar from "../components/Navbar";
import SGAs from "../layouts/SGAs";

// Images
import onu from "../assets/img/images/onu.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: "hidden",
    height: "100vh",
    width: "100%"
  }
}));

export default function Pricing() {
  const classes = useStyles();

  const roles = (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3" component="h2" align="left">
          SGAs
        </Typography>
        <Typography variant="body1">Munum esta dividida en 5 SGAs distribuidos en X comités, Conocelos.</Typography>
        <Box justify="center">
          <Grid container alignItems="center" justify="center">
            {["UMNG", "Externos", "Sponsors"].map(sga => (
              <Grid item sm="auto" md={4} key={sga}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media} image={onu} title="Contemplative Reptile" />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2" align="center">
                        70.000 COP
                      </Typography>
                      <Typography variant="body2" omponent="p" align="center">
                        {sga}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );

  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <div>{roles}</div>
    </div>
  );
}
