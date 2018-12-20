import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import DnsButton from "./dns-calc/dns-button.js";
import SonarButton from "./sonarbutton.js";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    margin: 0,
    padding: 0
  }
});
class MainButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.container} onClick={this.props.changeButtons}>
          {" "}
          <DnsButton dnsButton={this.props.theState.dns} name="DNS" />
          <SonarButton sonarButton={this.props.theState.sonar} name="Sonar" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MainButton);
