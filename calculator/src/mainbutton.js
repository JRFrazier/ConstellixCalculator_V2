import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import DnsButton from "./dnsbutton.js";
import SonarButton from "./sonarbutton.js";
import Grid from "@material-ui/core/Grid";

class MainButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid item onClick={this.props.changeButtons}>
        {" "}
        <DnsButton dnsButton={this.props.theState.dns} name="DNS" />
        <SonarButton sonarButton={this.props.theState.sonar} name="Sonar" />
      </Grid>
    );
  }
}

export default MainButton;
