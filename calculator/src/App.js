import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import MainButton from "./mainbutton.js";
import DsBanner from "./ds-banner.js";
import DnsCalc from "./dnscalc.js";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dns: true,
      sonar: false
    };
    this.changeButtons = this.changeButtons.bind(this);
  }
  changeButtons() {
    if (this.state.dns === true) {
      this.setState({ dns: false, sonar: true });
    } else {
      this.setState({ dns: true, sonar: false });
    }
    console.log(this.state.dns);
  }
  render() {
    return (
      <Paper className="app">
        <Grid container spacing={16}>
          <Grid
            container
            direction="column"
            spacing={0}
            xs={6}
            className="group-1"
          >
            <Grid item xs={6}>
              <MainButton
                theState={this.state}
                changeButtons={() => this.changeButtons()}
              />
            </Grid>
            <Grid item xs={6}>
              <DsBanner />
            </Grid>
            <Grid item xs={6}>
              <DnsCalc />
            </Grid>
          </Grid>
          <Grid container xs={6} className="group-2">
            <Grid item xs={6}>
              this
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;
