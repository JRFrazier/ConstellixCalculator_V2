import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DnsInput from "./dns-input.js";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,

  }
});

function DnsCalc(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={16} direction="column">
          <Grid item>
            <DnsInput labelName="Number of Domains" placeholder="" />
          </Grid>
          <Grid item>
            <DnsInput labelName="Number of Records" placeholder="" />
          </Grid>
          <Grid item>
            <DnsInput labelName="Queries Per Month" />
          </Grid>
          <Grid item>
            <DnsInput labelName="GTD Enabled Domains" />
          </Grid>
          <Grid item>
            <DnsInput labelName="Geo Proximity" />
          </Grid>
          <Grid item>
            <DnsInput labelName="IP Proximity" />
          </Grid>
          <Grid item>
            <DnsInput labelName="ANAME Records" />
          </Grid>
          <Grid item>
            <DnsInput labelName="Additional User Accounts" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

DnsCalc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DnsCalc);
