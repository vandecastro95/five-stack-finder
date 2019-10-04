import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import MainPageHero from '../../components/MainPageHero/MainPageHero';
import PlayerStatBox from '../../components/PlayerStatBox/PlayerStatBox';
import FiveStackList from '../../components/FiveStackList/FiveStackList';
import {playerDataInit} from './actions'
import { connect } from 'react-redux';
import Filter from '../../components/Filter/Filter';


const styles = () => ({
  root: {
    width: '100%',
    height: '100vh'
  },
  container: {
    marginTop: '-4px',
    position: 'relative'
  },
  row1: {
    marginBottom: ''
  },
  listBox: {
    marginLeft: 'auto',
  },
  avatarBox: {
    marginRight: 'auto'
  },
  Filter: {
    margin: '0 auto'
  }
});

const HomePage = props => {
  const { classes, profile, playerData, mmr_estimate, matches } = props;

  useEffect(() => {
    playerDataInit();
    console.log(props)
  })

  return (

    <div className={classes.root}>
      <Grid container spacing={1} className={classes.container}>
          <Grid item xs={12} className={classes.row1}>
            <MainPageHero />
            
          </Grid>
          <Grid item xs={8} className={classes.Filter}>
            
            <Filter />
          </Grid>
          <Grid item xs={6} className={classes.listBox}>
            <FiveStackList />
          </Grid>
          <Grid item xs={2} className={classes.avatarBox}>
          <PlayerStatBox
              personaname={profile.personaname}
              avatar={profile.avatarfull}
            />
          </Grid>
        </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  playerData: state.homePage.playerData,
  matches: state.homePage.matches,
  profile: state.homePage.playerData.profile,
  mmr_estimate: state.homePage.playerData.mmr_estimate
});

const mapDispatchToProps = dispatch => ({
  playerDataInit: playerDataInit(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage))