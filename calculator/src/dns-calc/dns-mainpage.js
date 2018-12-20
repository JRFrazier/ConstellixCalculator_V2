import React, { Component } from "react";
import "typeface-roboto";
import Paper from "@material-ui/core/Paper";
import DsBanner from "../ds-banner.js";
import DnsCalc from "./dns-calc.js";
import Grid from "@material-ui/core/Grid";

class DnsMain extends Component {
  render() {
    return (
      <Grid container direction="column" spacing={24}>
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

export default DnsMain;
