import * as React from "react";
import { Typography, Grid, ImageList, ImageListItem, ImageListItemBar, IconButton, Chip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

// components
import Layout from "../components/layout";

function TagsContainer({ tags }) {
  return (
    <div>
      {tags.map((tag) => ( tag.length == 0 ?
        <></> :
        <Chip
          label={tag}
          variant="filled"
          key={tag}
          size='small'
          sx={{ marginRight: '5px' }}
        ></Chip>
      ))}
    </div>
  );
}

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects">
      {/* use map to map project and links to card component */}
      <Grid container justifyContent='center' sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <ImageList sx={{ width: 800, height: 450 }} cols={3} rowHeight='200' gap={20} variant='standard'>
          {projectsData.map((project) => (
            <ImageListItem key={project.img}>
              <img
                src={`${project.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${project.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={project.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Typography sx={{ fontFamily: 'Karla', fontSize: '20px' }}>{project.title}</Typography>
                }
                subtitle={
                  <span>
                    <Typography sx={{ paddingBottom: '3px', width: 200 }}>{project.shortDes}</Typography>
                    <TagsContainer tags={project.tags} />
                  </span>
                }
                position="below"
                actionIcon={
                  <IconButton
                    sx={{ color: 'black' }}
                    aria-label={`info about ${project.title}`}
                    href={project.link}
                    target="_blank"
                  >
                    <LinkIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Layout>
  )
}

const projectsData = [
  // {
  //   title: "",
  //   description: "",
  //   img: "",
  //   imgAlt: "",
  //   tags: [""],
  // },
  {
    title: "Quizhub",
    shortDes: "School Project",
    description: "A MERN fullstack web application for users to create and take quizzes.",
    img: "https://res.cloudinary.com/quizhub/image/upload/v1639027329/i20ev3uzqhungzolrali.png",
    tags: ["MERN", "Web App", "SE"],
    link: "http://cse416-quizhub.herokuapp.com/",
  },
  // {
  //   title: "YoungOne",
  //   description: "description",
  //   img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  //   tags: [""],
  // },
  // {
  //   title: "YoungOne",
  //   description: "description",
  //   img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  //   tags: [""],
  // },
];

export default ProjectPage;