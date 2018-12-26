import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  sonar1: { marginLeft: 45, zIndex: 1, transition: "3", background: "#3846BF" },
  sonar2: {
    marginLeft: 45,
    opacity: 0.4,
    background: "#3846BF" 
  }
});

function SonarButton(props) {
  const { classes } = props;
  const sonar = !props.sonarButton ? classes.sonar2 : classes.sonar1;
  return (
    <div key="sonar" >
      <Fab
        color="primary"
        aria-label="DNS"
        className={sonar}
      >
        Sonar
      </Fab>
    </div>
  );
}

SonarButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SonarButton);
