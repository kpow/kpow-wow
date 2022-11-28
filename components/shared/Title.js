import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Slackey',
    fontWeight: 'bold',
    lineHeight: 1,
    paddingRight: '10px',
    paddingTop: '15px',
  },
}));

export default function Title({ children }) {
  const classes = useStyles();
  return (
    <Typography component="h2" variant="h4" className={classes.title}>
      {children}
    </Typography>
  );
}
