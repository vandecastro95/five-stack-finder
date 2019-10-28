import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    
  },
  FiveStackList: {
    height: 'auto',
    background: '#1A1A1C',
  },
  day: {
    color: "#fff",
    margin: '1px 10px',
    lineHeight: '1.6',
    fontSize: '13px',
    wordSpacing: '.1em',
    fontWeight: '600'
  }
});

const FiveStackList = props => {
  const { classes, fiveStack } = props;
  const { fiveStackList, fiveStackListIds } = fiveStack;

  return (
    <div  className={classes.root}>
        
        <Typography className={classes.day}>
          FRIDAY, OCTOBER 29
        </Typography>
        <Paper elevation={5} square className={classes.FiveStackList}>
          {console.log(fiveStackList[fiveStackListIds[0]])}
        </Paper>
    </div>    
  );
};

export default withStyles(styles)(FiveStackList);