import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
    root: {
      backgroundColor: '#1A1A1C',
      height: 'auto',
      paddingTop: '2px',
      width: '100%'
    },
    container: {
        width: '80%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    Header: {
        fontSize: '1.5rem',
        fontStyle: '',
        color: 'white',
        paddingLeft: '2rem',
    },
    headerNav: {
        color: 'white',
        display: 'flex',
    },
    Nav: {
        margin: '0 10px'
    }
  });

const Header = (props) => {
    const { classes } = props;

    return (
    <Paper
    elevation={3} 
    square 
    className={classes.root}>
            <Grid 
            container 
            spacing={4} 
            className={classes.container}>
                <Grid 
                item 
                xs={3}
                sm={6}>
                    <Typography 
                    variant='h5' 
                    gutterBottom 
                    className={classes.Header}>
                        Stack Finder
                    </Typography>
                </Grid>

                <Grid 
                item 
                xs={1}
                sm={1}
                md={2}
                lg={3}>
                    
                </Grid>

                <Grid 
                item 
                sm={5}
                md={4}
                lg={3}
                className={classes.headerNav}
                >
                        
                        
                            <Typography variant="body1" gutterBottom className={classes.Nav}>
                                 Explore
                            </Typography>

                            <Typography variant="body1" gutterBottom className={classes.Nav}>
                                Messages
                            </Typography>

                            <Typography variant="body1" gutterBottom className={classes.Nav}>
                                Notifications
                            </Typography>
                        

                        
                            
                        

                        
                        
                        
                   
                </Grid>
            </Grid>
    </Paper>
)}

export default withStyles(styles)(Header);