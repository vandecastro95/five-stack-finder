import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainContainer from '../../components/MainContainer/MainContainer';
import MainPageHero from '../../components/MainPageHero/MainPageHero';
import Hero from '../../components/Hero/Hero';
import UserContextProvider from '../../../context/UserContext';

const styles = (theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        background: '#102027',
    },
});

const HomePage = props => {
    const { classes } = props;

    return (
        <UserContextProvider>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <MainPageHero />
                    </Grid>
                    <Grid item xs={12}>
                        <MainContainer />
                    </Grid>
                </Grid>
            </div>
        </UserContextProvider>
    );
};

export default withStyles(styles)(HomePage);