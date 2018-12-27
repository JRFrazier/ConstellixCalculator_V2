import React, { Component } from "react";
import "typeface-roboto";
import DsBanner from "../ds-banner.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import SonarCalc from "./sonar-calc.js";

const styles = theme => ({
  main1: {
    display: "block"
  },
  main2: {
    display: "none"
  }
});
class SonarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sonar_checks: [],
      sonar_check_count: 0
    };
    this.addCheck = this.addCheck.bind(this);
    this.deleteCheck = this.deleteCheck.bind(this);
  }

  addCheck() {
    const check = this.state.sonar_checks;
    let checkCount = this.state.sonar_check_count;
    check.push(1 + checkCount);
    checkCount += 1;
    const obj = {};
    obj["check"] = {
      checkKey: Math.floor(
        Math.random() * 130 * ((Math.random() + 5.5) * (Math.random() * 1000.5))
      ),
      checkAmount: 1,
      checkType: "HTTP",
      checkPolicy: "Simultaneous",
      checkInterval: 86400,
      checkLocations: {
        North_America: {
          Toronto_Canada: false,
          New_York_NY: false,
          Newark_NJ: false,
          Chicago_IL: false,
          Washington_DC: false,
          Atlanta_GA: false,
          Miami_FL: false,
          Dallas_TX: false,
          Seattle_WA: false,
          Fremont_CA: false,
          San_Francisco_CA: false,
          Los_Angeles_CA: false,
          San_Jose_CA: false
        },
        Europe: {
          London_UK: false,
          Frankfurt_DE: false
        },
        Asia_Pacific: {
          Hong_Kong: false,
          Tokyo_JP: false,
          Singapore_SG: false,
          Banglore_IN: false,
          Chennai_IN: false
        },
        Oceania: { Sydney_AU: false, Adelaide_AU: false, Aukland_NZ: false }
      }
    };
    this.setState({ sonar_check: check, sonar_check_count: checkCount });
  }
  deleteCheck(number) {
    const checks = this.state.sonar_checks;
    checks.splice(checks.indexOf(number), 1);
    this.setState({ sonar_checks: checks });
  }

  render() {
    const { classes } = this.props;
    const main = !this.props.theState.sonar ? classes.main2 : classes.main1;
    return (
      <Grid container direction="column" spacing={24} className={main}>
        <Grid item>
          <DsBanner bannerName="Constellix Calculator" />
        </Grid>
        <Grid item>
          <SonarCalc
            addCheck={() => this.addCheck()}
            sonarChecks={this.state.sonar_checks}
            deleteCheck={number => this.deleteCheck(number)}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SonarMain);
