import * as React from "react";
import { Typography, Grid, ImageList, ImageListItem, ImageListItemBar, IconButton, Chip } from '@mui/material';

// components
import Layout from "../components/layout";

// markup
const ArtPage = () => {
  return (
    <Layout pageTitle="Artwork">
      {/* use map to map project and links to card component */}
      <Grid container justifyContent='center' sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <ImageList sx={{ width: 800 }} cols={2} rowHeight='auto' gap={20}>
          {artworksData.map((work) => (
            <ImageListItem key={work.img}>
              <img
                src={`${work.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${work.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={work.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Typography sx={{ fontFamily: 'Karla', fontSize: '20px' }}>{work.title}</Typography>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Layout>
  )
}

const artworksData = [
  {
    title: "2017 | Oil on canvas 66cmx41cm",
    img: "https://res.cloudinary.com/dshjjlnbk/image/upload/v1643772512/portfolio/2017_oilpainting_jhvyzv.jpg",
  },
  {
    title: "2020 | Photoshop",
    img: "https://res.cloudinary.com/dshjjlnbk/image/upload/v1643772196/portfolio/2020_photoshop_x20s86.jpg",
  },
];

export default ArtPage;