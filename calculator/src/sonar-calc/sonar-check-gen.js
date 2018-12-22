import React from 'react';
import SonarCheck from './sonar-check.js';
import { withStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

class SonarCheckGen extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Grid item>
                {this.props.sonarChecks.map(x => {return(
                    <Grid container spacing={16} xs={12}>
                   <SonarCheck key={x} /> 
                   </Grid>
                )}
               )}
            </Grid>
       )
    }
}
export default SonarCheckGen;