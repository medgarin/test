import { useTheme } from '@emotion/react';
import { Box, Grid, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { IProject } from '../const';
import { Links } from '../links';
import { useStyles } from './style';

interface Props {
  project: IProject;
  index: number;
}

export const MainProject: React.FC<Props> = ({ project, index }) => {
  const side = index % 2 === 0;
  const theme = useTheme();
  const classes = useStyles({ ...theme, side });
  const image = (
    <Grid item xs={12} md={7} sm={12} className={classes.imageContainer}>
      <Box position='relative'>
        <img src={`/images/projects/${project.image}`} width='100%' />
      </Box>
    </Grid>
  );
  const description = (
    <Grid item xs={12} md={5} sm={12} className={classes.textContainer}>
      <Box position='relative'>
        <Box className={classes.container}>
          <Typography variant='h5' className={classes.name}>
            {project.name}
          </Typography>
          <Typography paragraph>{project.description}</Typography>
          <Box display={{ xs: 'none', md: 'block', lg: 'block' }}>
            <Links
              github={project.github}
              boxClass={classes.techList}
              githubClass={classes.github}
              href={project.href}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  const content = side ? (
    <Fragment>
      {image}
      {description}
    </Fragment>
  ) : (
    <Fragment>
      {description}
      {image}
    </Fragment>
  );

  return (
    <Box mb={3}>
      <Grid container style={{ position: 'relative' }}>
        {content}
      </Grid>
    </Box>
  );
};
