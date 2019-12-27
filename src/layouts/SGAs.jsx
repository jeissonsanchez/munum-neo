// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Box, Card, CardMedia, CardContent, CardActionArea } from "@material-ui/core";

// Route
import { Link } from "react-router-dom";

// Images
import onu from "../assets/img/images/onu.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    padding: "70px 0"
  },
  card: {
    minWidth: 345,
    margin: 20
  },
  media: {
    height: 140
  }
}));

export default function SGAs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h3" component="h2" align="left">
          SGAs
        </Typography>
        <Typography variant="body1">Munum esta dividida en 5 SGAs distribuidos en X comités, Conocelos.</Typography>
        <Box justify="center">
          <Grid container alignItems="center" justify="center">
            {["Naciones Unidas", "Especializados", "Crisis", "Regionales", "Interconexión"].map(sga => (
              <Grid item sm="auto" md={4} key={sga}>
                <Link to="/committee/onu">
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={onu} title="Contemplative Reptile" />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="h2" align="center">
                          {sga}
                        </Typography>
                        <Typography variant="body2" omponent="p" align="center">
                          SGA
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
