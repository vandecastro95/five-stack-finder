import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HeroAvatar from '../HeroAvatar/HeroAvatar';
import FiveStackList from '../FiveStackList/FiveStackList';
import FiveStackListContextProvider from '../../../context/FiveStackListContext';

const styles = (theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        minHeight: '600px',
        zIndex: '2000',
        maxWidth: '950px',
        marginTop: '-50px'
    },
});

const MainContainer = props => {
    const { classes } = props;

    return (
        <Box className={classes.container}>
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12}>
                <HeroAvatar />
            </Grid>
            <Grid item xs={12}>
                <FiveStackListContextProvider>
                    <FiveStackList />
                </FiveStackListContextProvider>
            </Grid>
            </Grid>
        </Box>
    );
};

export default withStyles(styles)(MainContainer);