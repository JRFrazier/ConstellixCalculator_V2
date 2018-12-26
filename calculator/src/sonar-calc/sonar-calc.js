import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DnsInput from "../dns-calc/dns-input.js"
import AddButton from "./add-button.js" 
import SonarCheckGen from "./sonar-check/sonar-check-gen.js"

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 2,
    minHeight: 690
  }
});

class SonarCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
  const { classes } = this.props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={16} direction="column" >
        <Grid item>
        <Grid container justify="center" className="sonar-add">
            <AddButton addCheck={this.props.addCheck}/>
          </Grid>
          </Grid>
          <Grid item>
            <SonarCheckGen sonarChecks={this.props.sonarChecks}/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  }
}

SonarCalc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SonarCalc);