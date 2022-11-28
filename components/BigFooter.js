/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material/';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFF',
    paddingBottom: '100px',
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Slackey',
    color: '#FFF',
  },
  text: {
    color: '#fff',
  },
  large: {
    // width: theme.spacing(10),
    // height: theme.spacing(10),
    // margin: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    // padding: theme.spacing(2),
    // color: theme.palette.text.secondary,
    flexGrow: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    // [theme.breakpoints.up('md')]: {
    //   flexDirection: 'row',
    // },
  },
}));

// eslint-disable-next-line prefer-arrow-callback
const BigFooter = React.memo(function BigFooter() {
  const classes = useStyles();

  return (
    <Box className="big-footer" bgcolor="#000" height="100%" px={{ xs: 2, sm: 3, lg: 4 }}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3} justify="space-between">
            <Grid item lg={4} md={6} sm={12}>
              <Paper className={classes.paper}>
                <Box className="kpow-image">
                  <Avatar alt="kpow" src="../static/headshot.png" className={classes.large} />
                </Box>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    About Kpow
                  </Typography>
                  <Typography paragraph className={classes.text}>
                    Digital Architect - Leader - Developer - Pixel Farmer - Voracious Reader and Dad. I&#39;m into travel, ukes, pugs, live music, and pixels
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Paper className={classes.paper}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    Site
                  </Typography>
                  <Typography paragraph className={classes.text}>
                    This is a JAMstack site built with Next.js, React.js, Material-UI, React-Query, and some content in Markdown. Using Instagram, GoodReads, Feedbin, Unsplash, faviconkit and whatever other API&apos;s I&apos;m playing with :)
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
});

export default BigFooter;
