import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  }
});

function DnsCalc(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h6" component="h4">
          DNS/Sonar Calc
        </Typography>
      </Paper>
    </div>
  );
}

DnsCalc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DnsCalc);