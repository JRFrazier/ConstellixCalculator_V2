import React, { Component } from "react";
import "typeface-roboto";
import Paper from "@material-ui/core/Paper";
import DsBanner from "../ds-banner.js";
import Grid from "@material-ui/core/Grid";

class MonthlyTotal extends Component {
  render() {
    return (
      <Grid container direction="column" spacing={24}>
        <Grid item>
          <DsBanner bannerName="Monthly Total" />
        </Grid>
        <Grid item>
        place holder
        </Grid>
      </Grid>
    );
  }
}

export default MonthlyTotal;