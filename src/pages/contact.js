import * as React from "react";
import { InlineWidget } from "react-calendly";
import { Typography, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

// components
import Layout from "../components/layout";

// markup
const ContactPage = () => {
  return (
    <Layout pageTitle="Kelly Peng | Contact">
      <Grid container direction='column' justifyContent='center' alignItems='center' sx={{ padding: '20px' }}>
        <Grid item>
          <Typography sx={{ fontFamily: 'Karla', fontSize: '20px', paddingBottom: '20px' }}>
            Stony Brook, New York | mingyukelly.peng@gmail.com | (631) 428-9155
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label='linkedin' href='https://www.linkedin.com/in/mingyu-kelly-peng/' target="_blank">
              <LinkedInIcon />
          </IconButton>
          <IconButton aria-label='github' href='https://github.com/kellypeng44' target="_blank">
              <GitHubIcon />
          </IconButton>
          <IconButton aria-label='email' href='mailto: mingyukelly.peng@gmail.com' target="_blank">
              <EmailIcon />
          </IconButton>
          <IconButton aria-label='phone' href='tel:+16314289155' target="_blank">
              <PhoneIcon />
          </IconButton>
        </Grid>

        {/* <Grid item>
          <Typography sx={{ fontFamily: 'Karla', fontSize: '20px', paddingTop: '40px' }}>
            Or you can book a meeting with me
          </Typography>
        </Grid>
        <Grid item>
          <IconButton href='#calendly' sx={{ scrollBehavior: 'smooth' }}>
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Grid> */}
      </Grid>
      {/* Calendly inline widget */}
      <div id='calendly'>
        <InlineWidget 
          url="https://calendly.com/mingyukellypeng/30min" 
          styles={{ minWidth: '320px', height: '700px' }}
          pageSettings={{ 
            "backgroundColor": "FFFFFF",
            "hideEventTypeDetails": false,
            "hideLandingPageDetails": false,
            "primaryColor": "FFBBD6",
            "textColor": "4d5055",
            "hideGdprBanner": true,
          }} 
        />
      </div>
    </Layout>
  );
};

export default ContactPage;