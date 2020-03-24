import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HeroAvatar from '../HeroAvatar/HeroAvatar';

const styles = (theme) => ({
  root: {
      minHeight: '600px',
        background: '#102027',
      zIndex: '2000'
  },
});

const Hero = props => {
  const { classes } = props;

  return (

    <Paper elevation={5} className={classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
        </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Hero);