import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Add from '@material-ui/icons/Add';

const styles = theme => ({
  sonar1: { marginLeft: 45, zIndex: 1, transition: "3", background: "#3846BF" },
  
});

function AddButton(props) {
  const { classes } = props;
  return (
    <div>
      <Fab
        color="primary"
        aria-label="DNS"
        className={classes.sonar1}
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