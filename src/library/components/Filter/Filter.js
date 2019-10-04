import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase';

const styles = (theme) => ({
  root: {
    marginTop: '-20px',
    background: '#1A1A1C',
    height: '60px'
  },
  input: {
    marginLeft: theme.spacing(1),
    width: '300px',
    height: '36px',
    flex: 1,
    background: '#ffffff',
    margin: '11px',
    padding: '2px'
  },
});

const Filter = props => {
  const { classes } = props;

  return (
    <Paper elevation={20} square className={classes.root}>
         <InputBase
         fullWidth
            className={classes.input}
            placeholder="Search "
            inputProps={{ 'aria-label': 'search google maps' }}
            />
    </Paper>
  );
};

export default withStyles(styles)(Filter);