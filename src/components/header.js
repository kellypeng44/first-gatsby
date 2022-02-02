import * as React from 'react';
import { Link } from 'gatsby';
import { Typography, Grid } from '@mui/material';

export default function Header() {
    return(
        <Grid container direction='column' alignItems='center' sx={{ paddingTop: '50px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '30px' }}>
            {/* TODO: change onHover color and mouse */}
            <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontFamily: 'Karla', fontSize: '48px', color: 'black' }}>
                        KELLY PENG
                    </Typography>
                </Link>
            </Grid>
            {/* TODO: change onClick and onHover color */}
            <Grid item container alignItems='center' justifyContent='center' direction='row' spacing={5} sx={{ paddingTop: '20px' }}>
                <Grid item>
                    <Link to="/project/" style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: '#A3A3A3', fontFamily: 'Work Sans', fontSize: '20px', fontWeight: '600' }}>
                            Project
                        </Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/art/" style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: '#A3A3A3', fontFamily: 'Work Sans', fontSize: '20px', fontWeight: '600' }}>
                            Art
                        </Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/contact/" style={{ textDecoration: 'none' }}>
                        <Typography sx={{ color: '#A3A3A3', fontFamily: 'Work Sans', fontSize: '20px', fontWeight: '600' }}>
                            Contact
                        </Typography>
                    </Link>
                </Grid>
                {/* blog page */}
            </Grid>
        </Grid>
    );
};