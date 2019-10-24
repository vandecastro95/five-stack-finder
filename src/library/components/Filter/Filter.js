import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search';

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
    padding: '2px',
    borderRadius: '1.5px'
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
            inputProps={{
              style: {
                padding: '5px'
              }
            }}
      
          endAdornment={
                <InputAdornment
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(0, 0, 0, 0.54)',
                  lineHeight: '1.5',
                }}
                position="end">
                  <SearchIcon/>
                </InputAdornment>
          }
            
            />
    </Paper>
  );
};

export default withStyles(styles)(Filter);