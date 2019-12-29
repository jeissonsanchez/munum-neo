// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components
import Navbar from "../components/Navbar";
import Munum from "../layouts/Munum";
import CommitteeHead from "../layouts/Committee-head";

// Image
import diego from "../assets/img/images/diego3.jpg";
import santiago from "../assets/img/images/santiago.jpg";

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
        <CommitteeHead image={diego} title="BIENVENIDOS" who="Diego Ruíz" position="Secretario General MUNUM'20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at, nobis ratione necessitatibus excepturi quod culpa distinctio delectus iure? Libero natus nesciunt blanditiis animi provident similique quia possimus earum nisi?
        </CommitteeHead>
      </div>
    </div>
  );
}
