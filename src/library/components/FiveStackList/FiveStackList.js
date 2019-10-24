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
  const { classes, fiveStack } = props;
  const { fiveStackList, fiveStackListIds } = fiveStack;

  return (
    <div  className={classes.root}>
        
        
        <Paper elevation={5} square className={classes.FiveStackList}>
          {console.log(fiveStackList[fiveStackListIds[0]])}
        </Paper>
    </div>    
  );
};

export default withStyles(styles)(FiveStackList);