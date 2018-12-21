import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DnsInput from "../dns-calc/dns-input.js"
import AddButton from "./add-button.js" 

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    minHeight: 690
  }
});

function SonarCalc(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={16} direction="column">
            <AddButton /> 
        </Grid>
      </Paper>
    </div>
  );
}

SonarCalc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SonarCalc);