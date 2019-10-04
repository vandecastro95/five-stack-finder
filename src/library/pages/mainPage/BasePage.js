import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = (theme) => ({
  root: {

  },
});

const PlayerStatBox = props => {
  const { classes } = props;

  return (
    <Paper elevation={10} square className={classes.root}>
        
    </Paper>
  );
};

export default withStyles(styles)(PlayerStatBox);