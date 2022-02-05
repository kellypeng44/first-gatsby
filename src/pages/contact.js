import * as React from "react";
import { InlineWidget } from "react-calendly";
import { Typography, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

// components
import Layout from "../components/layout";

// markup
const ContactPage = () => {
  return (
    <Layout pageTitle="Kelly Peng | Contact">
      {/* Calendly inline widget */}
      <div>
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