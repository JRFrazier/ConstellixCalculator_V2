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

class CheckType extends React.Component {
  state = {
    type: "",
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
            Check Type
          </InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.type}
            onChange={this.handleChange}
            inputProps={{
              name: "type",
              id: "demo-controlled-open-select"
            }}
          >
            <MenuItem value={1}>HTTP</MenuItem>
            <MenuItem value={2}>HTTPS</MenuItem>
            <MenuItem value={3}>TCP</MenuItem>
            <MenuItem value={4}>DNS</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

CheckType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckType);
