import React from "react";

// Components
import Sidebar from "./components/Sidebar";

// Material UI
import { makeStyles, StylesProvider, withStyles } from "@material-ui/core/styles";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Pricing from "./pages/Pricing";

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

      <Router>
        <div className={classes.layout}>
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/munum-neo/" exact component={Home} />
            <Route path="/" exact component={Home} />
            <Route path="/committee" component={Committee} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
