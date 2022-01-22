import * as React from 'react';
import { CssBaseline, Box, Typography, Container, Link, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ minWidth: '200px', paddingLeft: '20px' }}>
        {'Copyright © '}
        <Link color="inherit" href="">
          Kelly Peng
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
};

function Sites() {
    return (
        <Container>
            <IconButton aria-label='linkedin' href='www.linkedin.com/in/mingyu-kelly-peng'>
                <LinkedInIcon />
            </IconButton>
            <IconButton aria-label='email' href='mailto: mingyukelly.peng@gmail.com'>
                <EmailIcon />
            </IconButton>
            <IconButton aria-label='github' href='https://github.com/kellypeng44'>
                <GitHubIcon />
            </IconButton>
        </Container>
    );
};

export default function Footer() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.white
                : theme.palette.black,
            // backgroundColor: '#d6d6d6',
          }}
        >
            <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
                    <Copyright />
                </Grid>
                <Grid item>
                    <Sites />
                </Grid>
            </Grid>
        </Box>
      </Box>
    );
};

