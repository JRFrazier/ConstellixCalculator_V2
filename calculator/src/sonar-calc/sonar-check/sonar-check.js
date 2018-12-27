import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
//imports for cancel button
import CancelButton from "@material-ui/icons/Cancel";
import red from "@material-ui/core/colors/red";
import CheckType from "./sonar-type-selects.js";
import CheckInterval from "./sonar-int-selects.js";
import CheckPolicy from "./sonar-policy-selects.js";
import SonarModal from "./sonar-check-modal.js";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2,
    marginRight: 16
  },
  checkAmount: {
    width: 50
  },
  cancelButton: {
    "&:hover": {
      color: red[800]
    }
  }
});

function SonarCheck(props) {
  const { classes } = props;
  return (
    <Grid item xs={12}>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={24} direction="column">
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  placeholder="1"
                  className={classes.checkAmount}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item id="testing">
                <CancelButton
                  onClick={() => props.deleteCheck(props.checkNum)}
                  color="action"
                  className={classes.cancelButton}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <CheckType />
              </Grid>
              <Grid item>
                <CheckInterval />
              </Grid>
              <Grid item>
                <CheckPolicy />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify="center">
              <Grid item>
                <SonarModal />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

SonarCheck.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SonarCheck);
