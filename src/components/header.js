import * as React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid } from '@mui/material';

export default function Header() {
    return(
        <Grid container direction='column' alignItems='center' sx={{ padding: '50px' }}>
            <Grid item>
                <Typography sx={{ fontFamily: 'Karla', fontSize: '40px' }}>KELLY PENG</Typography>
            </Grid>
            {/* TODO: change the spacing and color of the links */}
            <Grid item container alignItems='center' justifyContent='center' direction='row' spacing={2} sx={{ paddingTop: '20px' }}>
                <Grid item>
                    <Link to="/project/" style={{ textDecoration: 'none' }}>Project</Link>
                </Grid>
                <Grid item>
                    <Link to="/contact/" style={{ textDecoration: 'none' }}>Contact</Link>
                </Grid>
                {/* blog page */}
            </Grid>
        </Grid>
    );
};