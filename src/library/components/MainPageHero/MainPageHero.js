import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const styles = (theme) => ({
  root: {
      background: '#CF6679',
      height: '130px',
  },
  heroContainer: {
    maxWidth: '950px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    padding: '32px 0 10px',
  },
  heroHeader: {
     color: '#000000',
     fontWeight: '500',
     fontSize: '35px',
     lineHeight: '1.25',
  },
  heroSub: {
      marginTop: '-10px'
  }
});

const HomePage = props => {
  const { classes } = props;

  return (
    <Paper elevation={10} square className={classes.root}>
        <Box className={classes.heroContainer}>
            <Typography variant="h2" gutterBottom className={classes.heroHeader}>
                Find your Five Man Stack!
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.heroSub}>
                0 five stacks in your friend list - 0 people looking for role
            </Typography>
        </Box>
    </Paper>
  );
};

export default withStyles(styles)(HomePage);