import React from 'react';
import { height } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainPageHero from '../../components/MainPageHero/MainPageHero'

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100vh'
  },
});

const HomePage = props => {
  const { classes } = props;

  return (

    <div className={classes.root}>
        <MainPageHero />
    </div>
  );
};

export default withStyles(styles)(HomePage);