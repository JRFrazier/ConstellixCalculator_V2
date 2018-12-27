import React from "react";
import SonarCheck from "./sonar-check.js";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class SonarCheckGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={16} direction="column">
        {this.props.sonarChecks.map(x => {
          return (
            <SonarCheck
              checkNum={x}
              deleteCheck={this.props.deleteCheck}
              key={Math.floor(
                Math.random() *
                  130 *
                  ((Math.random() + 5.5) * (Math.random() * 1000.5))
              )}
            />
          );
        })}
      </Grid>
    );
  }
}
export default SonarCheckGen;
