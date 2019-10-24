import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import MainPageHero from '../../components/MainPageHero/MainPageHero';
import PlayerStatBox from '../../components/PlayerStatBox/PlayerStatBox';
import FiveStackList from '../../components/FiveStackList/FiveStackList';
import {playerDataInit, fivestackCreate} from './actions'
import { connect } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import Hidden from '@material-ui/core/Hidden';

const styles = () => ({
  root: {
    width: '100%',
    height: '100vh',
    overflow: 'scroll'
  },
  container: {
    marginTop: '-4px',
    position: 'relative'
  },
  row1: {
    marginBottom: ''
  },
  row2: {
    margin: 'auto'
  },
  listBox: {
    marginBottom: 'auto',
    marginRight: 'auto'
  },
  avatarBox: {
    marginLeft: 'auto',
  },
  Filter: {
  }
});

const HomePage = props => {
  const { classes, profile, playerData, mmr_estimate, matches, fiveStack } = props;

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

          <Grid item xs={12} md={10} lg={6} className={classes.row2} container spacing={1} alignItems='center'>
              <Grid item xs={12} className={classes.Filter}>
                <Filter />
              </Grid>

              <Grid item xs={12} md={4} lg={4} className={classes.avatarBox}>
              <PlayerStatBox
                  personaname={profile.personaname}
                  avatar={profile.avatarfull}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={8} className={classes.listBox}>
                <FiveStackList 
                
                fiveStack={fiveStack}/>
              </Grid>
          </Grid>
          
        </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  playerData: state.homePage.playerData,
  matches: state.homePage.matches,
  profile: state.homePage.playerData.profile,
  mmr_estimate: state.homePage.playerData.mmr_estimate,
  fiveStack: state.homePage.fiveStack
});

const mapDispatchToProps = dispatch => ({
  playerDataInit: playerDataInit(),
  fivestackCreate: fivestackCreate()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage))