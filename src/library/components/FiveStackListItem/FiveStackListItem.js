import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import data from '../../data.js'
import Avatar from '@material-ui/core/Avatar';
import { Typography, Divider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        zIndex: '2000',
        backgroundColor: '#2b414f',
        color: '#ffffff',
        margin: '20px 0px',
        overflow: 'hidden'
    },
    teamInfo: {
        padding: '20px'
    },
    teamTime: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontSize: '1.5rem',
        color: '#b0bec5',
        padding: '20px',
        textAlign: 'center',
        background: '#2b414f',
    },
    teamSchedule: {
        color: '#b0bec5',
        textTransform: 'uppercase'
    },
    teamName: {
        color: '#ffffff',
        fontSize: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    teamAvatar: {
        height: '100px'
    },
    teamListContainer: {
        background: 'rgb(43,65,79, .3)',
        color: '#ffffff'
    },
    teamList: {
        display: 'flex',
        background: 'rgb(43,65,79, .3)',
    },
    teamListSummary: {
        background: 'rgb(43,65,79, .3)',
        color: '#ffffff'
    },
    teamListItems: {
        padding: '20px',
        margin: '20px',
        minWidth: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#b0bec5',
        background: '#2b414f'
    },
    teamInfoContainer: {
        background: '#2b414f'
    }
});

const FiveStackListItem = ({ classes, ...props }) => {
    const [lanes, setLanes] = useState([0, 'Safe Lane', 'Mid Lane', 'Offlane', 'Support', 'Hard Support'])
    const { id, name = '', tag = '', playerListId = [], playerList = {}, logoURL = '' } = props.data;
    return (

        <Paper key={id} className={classes.root} elevation={4} square={true}>
            <Paper elevation={6}>
            <Grid container spacing={0}>
               
                {console.log(props)}
                <Grid item xs={10} className={classes.teamInfoContainer}>
                    <Grid container spacing={0} className={classes.teamInfo}>
                        <Grid item xs={2} className={classes.teamAvatar}>
                            <Avatar
                                alt="Remy Sharp"
                                src={logoURL}
                                style={{
                                    height: '100px',
                                    width: '100px',
                                }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className={classes.teamSchedule}>Monday / Wednesday / Thursday, next game April 20, 2020</Typography>
                            <Typography className={classes.teamName}>{name}</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={2} className={classes.teamTime}>
                    10:00 PM
                </Grid>
                </Grid>
            </Paper>
            <ExpansionPanel className={classes.teamListContainer}>
                <ExpansionPanelSummary className={classes.teamListSummary}>
                    Details
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.teamList}>
                    {
                        playerListId.map((id) => {
                            const { profile: { personaname, avatar, profileurl } } = playerList[id];
                            return (
                                <Paper square={true} elevation={6} className={classes.teamListItems} key={personaname}>
                                    <Avatar
                                        src={avatar}
                                    />
                                    <Typography>
                                        {personaname}
                                    </Typography>
                                    <Typography>
                                        {lanes[id]}
                                    </Typography>
                                </Paper>
                            )
                        })
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Paper>
    );
};

export default withStyles(styles)(FiveStackListItem);