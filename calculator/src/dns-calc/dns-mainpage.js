import React, { Component } from "react";
import "typeface-roboto";
import Paper from "@material-ui/core/Paper";
import DsBanner from "../ds-banner.js";
import DnsCalc from "./dns-calc.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  main1: {
    display: "block"
  },
  main2: {
    display: "none"
  }
})
class DnsMain extends Component {
  render() {
    const { classes } = this.props;
    const main = !this.props.theState.dns ? classes.main2 : classes.main1;
    return (
      <Grid container direction="column" spacing={24} className={main}>
        <Grid item>
          <DsBanner bannerName="DNS Calculator" />
        </Grid>
        <Grid item>
          <DnsCalc />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(DnsMain);
