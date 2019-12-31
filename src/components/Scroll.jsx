// React
import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  scroll: props => ({
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    color: `${props.color}`,
    margin: 58
  }),
  instruction: {
    margin: 10,
    lineHeight: 1.5,
    "&>span": {
      textTransform: "none"
    }
  },
  scrollDown: props => ({
    width: 50,
    height: 80,
    borderRadius: 25,
    background: "transparent",
    border: `2px solid ${props.color}`,
    overflow: "hidden"
  })
}));

export default function Scroll(props) {
  const classes = useStyles(props);

  return (
    <Box className={classes.scroll}>
      <div className={classes.scrollDown}></div>
      <Typography variant="overline" align="center">
        <div className={classes.instruction}>
          <b>Scroll </b> <br />
          <span>{props.children}</span>
        </div>
      </Typography>
    </Box>
  );
}
