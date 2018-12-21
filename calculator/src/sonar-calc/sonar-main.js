import React, { Component } from "react";
import "typeface-roboto";
import DsBanner from "../ds-banner.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import SonarCalc from "./sonar-calc.js"

const styles = theme => ({
  main1: {
    display: "block",
  },
  main2: {
      display: "none"
  }
})
class SonarMain extends Component {
  render() {
    const { classes } = this.props
    const main = !this.props.theState.sonar ? classes.main2 : classes.main1;  
    return (
      <Grid container direction="column" spacing={24} className={main}>
        <Grid item>
          <DsBanner bannerName="Constellix Calculator" />
        </Grid>
        <Grid item>
          <SonarCalc />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SonarMain);