import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    // paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(10),
  },
});

const BasePage = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {props.children}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(BasePage);