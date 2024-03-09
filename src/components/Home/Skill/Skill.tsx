import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { ISkill } from './const';
import { useStyles } from './styles';

export const Skill: FC<ISkill> = ({ Icon, description, title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant='h5' className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.iconContainer}>
        <Icon className={classes.icon} />
      </Box>
      <Typography color='textSecondary' paragraph>
        {description}
      </Typography>
    </Box>
  );
};
