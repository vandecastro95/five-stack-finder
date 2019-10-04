import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = (theme) => ({
  root: {
    
  },
  FiveStackList: {
      
    height: '558px',
    background: '#1A1A1C',
  }
});

const FiveStackList = props => {
  const { classes } = props;

  return (
    <div  className={classes.root}>
        
        
        <Paper elevation={5} square className={classes.FiveStackList}>
        
        </Paper>
    </div>    
  );
};

export default withStyles(styles)(FiveStackList);