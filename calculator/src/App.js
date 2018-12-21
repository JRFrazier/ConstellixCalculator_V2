import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import MainButton from "./mainbutton.js";
import DsBanner from "./ds-banner.js";
import DnsCalc from "./dns-calc/dns-calc.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DnsMain from "./dns-calc/dns-mainpage.js";
import MonthlyTotal from "./monthlytotal/monthly-total.js"
import SonarMain from "./sonar-calc/sonar-main.js"
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
      <Grid container justify="center">
        <Grid item xs={9}>
          <Paper className="app">
            <Grid container direction="row" xs={12} spacing={24}>
              <Grid item xs={12} className="header">
                <Grid container direction="row">
                  <Grid container xs={6}>
                    <Grid item>
                      <MainButton
                        theState={this.state}
                        changeButtons={() => this.changeButtons()}
                      />
                    </Grid>
                  </Grid>
                  <Grid container xs={6} justify="center">
                    <Grid item>
                      <Typography variant="h2" componnt="h1">
                        Constellix Logo
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} className="group-1">
                <Grid container direction="column" spacing={24}>
                  <Grid item>
                    <DnsMain theState={this.state}/>
                    <SonarMain theState={this.state}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} className="group-2">
                <Grid container direction="column" spaceing={24}>
                  <Grid item>
                  <MonthlyTotal />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
