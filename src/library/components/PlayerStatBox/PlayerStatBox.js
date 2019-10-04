import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
      height: '600px',
      background: '#1A1A1C',
      marginTop: '10px'
  },
  avatar: {
      height: 60,
      width: 60,
      borderRadius: 0,
      marginRight: '10px'
  },
  avatarContainer: {
    //   border: '1px solid red',
        marginTop: '10px',
      width: '80%',
      margin: '0 auto',
      height: 'auto',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'row',
      background: "#111111"
  }
});

const PlayerStatBox = props => {
  const { classes } = props;

  return (
    <Paper elevation={5} square className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box className={classes.avatarContainer}>
                    <Avatar alt={props.personaname} src={props.avatar} className={classes.avatar}/>
                        <Typography variant="h5">
                            {props.personaname}
                        </Typography>
                </ Box>
            </Grid>
        </Grid>
    </Paper>    
  );
};

export default withStyles(styles)(PlayerStatBox);