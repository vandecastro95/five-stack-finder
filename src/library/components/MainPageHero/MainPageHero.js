import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        marginTop: '-5px',
        zIndex: '100',
        background: '#FFA48E',
        height: '200px',
        width: '100%'
    },
    heroHeader: {
        color: '#000000',
        fontWeight: '500',
        fontSize: '34px',
        lineHeight: '1.25',
    },
    heroSub: {
        marginTop: '-10px',
        marginLeft: '10px'
    },
    box: {
        width: '390px',
        margin: 'auto',
        paddingTop: '50px'
    }
});

const HomePage = props => {

    const { classes } = props; 

    return (
        <div className={classes.root}>  
            <Box className={classes.box}>
                <Typography variant="h2" gutterBottom className={classes.heroHeader}>
                    Find your Five Man Stack!
        </Typography>
                <Typography variant="body2" gutterBottom className={classes.heroSub}>
                    0 five stacks in your friend list - 0 people looking for role
        </Typography>
            </Box>
        </div>
    );
};

export default withStyles(styles)(HomePage);