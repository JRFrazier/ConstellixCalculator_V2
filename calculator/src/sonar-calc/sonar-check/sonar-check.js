import React from "react"
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
      marginRight: 16,
  
    }
  });

function SonarCheck(props) {
    const { classes} = props;
    return (
        <Grid item xs={12} >
            <Paper className={classes.root} elevation={1}>
                <Grid container spacing={16}  direction="column">
                    <Grid item>
                        Nothing to see here
                    </Grid>
                    <Grid item>
                        Nothing to see here
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
      )
}

SonarCheck.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(SonarCheck);