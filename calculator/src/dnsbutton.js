import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  dns1: {
    position: "absolute",
    zIndex: 1
  },
  dns2: {
    position: "absolute",
    opacity: 0.4
  }
});

function DnsButton(props) {
  const { classes } = props;
  const dns = !props.dnsButton ? classes.dns2 : classes.dns1;
  return (
    <div>
      <Fab
        onClick={() => {
          console.log(dns);
        }}
        color="primary"
        aria-label="DNS"
        className={dns}
      >
        DNS
      </Fab>
    </div>
  );
}

DnsButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DnsButton);
