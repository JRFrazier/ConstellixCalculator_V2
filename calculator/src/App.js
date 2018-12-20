import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import MainButton from "./mainbutton.js";
import DsBanner from "./ds-banner.js";
import DnsCalc from "./dns-calc.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      <Paper className="app" >
        <Grid container direction="row" xs={24} spacing={24}>
          <Grid
            item
            xs={6}
            className="group-1"
          >
          <Grid 
            container 
            direction="column" 
            spacing={24}>
          <Grid item >
                <MainButton
                theState={this.state}
                changeButtons={() => this.changeButtons()}
                />
          </Grid>
          <Grid item><DsBanner/></Grid>
          <Grid item><DnsCalc/></Grid>
          </Grid>
          </Grid>
          <Grid item xs={6} className="group-2">
          <Grid container direction="column" spaceing={24}>
            <Grid item >
             <Typography variant="h2" componnt="h1">Constellix Logo</Typography>
            </Grid>
            <Grid item><DsBanner/></Grid>
          </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default App;
