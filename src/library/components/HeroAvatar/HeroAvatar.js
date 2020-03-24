import React, { useState, useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { UserContext } from '../../../context/UserContext';

const styles = (theme) => ({
    root: {
        background: '#2b414f',
        minHeight: '120px',
        width: '98%',
        margin: '0 auto',
        color: '#ffffff'
    },
    avatar: {
        height: '100px',
        width: '100px'
    },
    avatarContainer: {
        padding: '10px',
    },
    avatarImageContainer: {
        display: 'flex'
    },
    avatarBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '20px'
    },
    role: {
        fontWeight: '300',
        fontSize: '1.1rem'
    }
});

const HeroAvatar = props => {

    const { userData } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const { classes } = props;

    useEffect(() => {
        setIsLoading(true)

    }, [userData])

    return (

        <Paper square className={classes.root} elevation={3}>
            {console.log(userData)}
            {isLoading && (
                <Grid container spacing={0} className={classes.avatarContainer}>
                    <Grid item xs={12} className={classes.avatarImageContainer}>
                        <Avatar variant="square" alt="Avatar" src={userData.profile.avatar} className={classes.avatar} />
                        <Box className={classes.avatarBox}>
                            <Typography variant="h4"> {userData.profile.personaname} </Typography>
                            <Typography variant="h5" className={classes.role}> Ancient Offlaner </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )
            }
        </Paper >
    );
};

export default withStyles(styles)(HeroAvatar); 