import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
      background: '#CF6679',
      height: '200px',
      width: '80%',
      margin: '0 auto',
      position: 'relative'
  },
  heroHeader: {
     color: '#000000',
     fontWeight: '500',
     fontSize: '34px',
     lineHeight: '1.25',
     padding: '32px 0 48px',
     maxWidth: '950px',
     position: 'absolute',
     left: '32%',
     top: '8%'
  },
  heroSub: {
    position: 'absolute',
    left: '33%',
    top: '46%'
  }
});

const HomePage = props => {
  const { classes } = props;

  return (
    <Paper square className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.heroHeader}>
            Find your Five Man Stack!
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.heroSub}>
            0 five stacks in your friend list - 0 people looking for role
        </Typography>
    </Paper>
  );
};

export default withStyles(styles)(HomePage);