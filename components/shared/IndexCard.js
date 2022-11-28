import { React } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNextOutlined';
import Divider from '@mui/material/Divider';
import Title from '../shared/Title';

const IndexCard = ({ title, link, image, button }) => (
  <Grid item xs={12} sm={6} md={4} style={{ margin: '0 auto' }}>
    <Divider style={{ marginTop: '10px' }} />
    <Box style={{ display: 'flex' }}>
      <Title>
        {title}
      </Title>
      <Link href={link}>
        <Button
          style={{ marginTop: '15px' }}
          size="small"
          variant="outlined"
          endIcon={<NavigateNextIcon />}
        >
          {button}
        </Button>
      </Link>
    </Box>
    <Divider style={{ marginTop: '10px' }} />
    <Link href={link}>
      <Paper elevation={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
        <img alt="battle" style={{ width: '100%' }} src={image} />
      </Paper>
    </Link>
  </Grid>
);

export default IndexCard;
