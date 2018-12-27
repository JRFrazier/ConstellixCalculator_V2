import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class CheckInterval extends React.Component {
  state = {
    interval: "",
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            Check Interval
          </InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.interval}
            onChange={this.handleChange}
            inputProps={{
              name: "interval",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value={1}>30 Seconds</MenuItem>
            <MenuItem value={2}>1 Minute</MenuItem>
            <MenuItem value={3}>2 Minutes</MenuItem>
            <MenuItem value={4}>3 Minutes</MenuItem>
            <MenuItem value={5}>4 Minutes</MenuItem>
            <MenuItem value={6}>5 Minutes</MenuItem>
            <MenuItem value={7}>10 Minutes</MenuItem>
            <MenuItem value={8}>30 Minutes</MenuItem>
            <MenuItem value={9}>12 Hours</MenuItem>
            <MenuItem value={10}>24 Hours</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

CheckInterval.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckInterval);
