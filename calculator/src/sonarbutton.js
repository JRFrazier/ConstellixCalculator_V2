import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  sonar1: { marginLeft: 45, zIndex: 1, transition: "opacity 3" },
  sonar2: {
    marginLeft: 45,
    opacity: 0.4
  }
});

function SonarButton(props) {
  const { classes } = props;
  const sonar = !props.sonarButton ? classes.sonar2 : classes.sonar1;
  return (
    <div>
      <Fab
        onClick={() => {
          console.log(sonar);
        }}
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
