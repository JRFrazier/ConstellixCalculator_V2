import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Add from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  sonar1: {marginBottom: -35, background: "#3846BF" },
  
});

function AddButton(props) {
  const { classes } = props;
  return (
    <div >
      <Fab
        color="primary"
        aria-label="DNS"
        className={classes.sonar1}
        onClick={() => props.addCheck()}
      >
      <Add />
      </Fab>
    </div>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddButton);