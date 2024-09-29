import {
  Box,
  BoxProps,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { FC, CSSProperties } from 'react';
import { alterFormat } from '../../util';

interface Props {
  size?: 'small' | 'big' | 'medium';
  primary?: boolean;
  props?: BoxProps;
  id: string;
  children: any;
}

const styles = makeStyles(({ palette }) => ({
  box: {
    backgroundColor: palette.background.paper,
  },
}));

export const Section: FC<Props> = ({
  size = 'medium',
  props,
  children,
  primary,
  id,
}) => {
  const height =
    size === 'medium' ? '70vh' : size === 'small' ? '30vh' : '100vh';

  const classes = styles();
  return (
    <Box
      id={id}
      className={primary ? classes.box : ''}
      minHeight={height}
      {...props}
    >
      {children}
    </Box>
  );
};

interface TitleProps {
  primary: string;
  secundary: string;
  props?: CSSProperties;
}

export const TitleSection: FC<TitleProps> = ({ primary, secundary, props }) => (
  <Box marginBottom={3} style={props}>
    <Typography color='primary' style={{ fontSize: '12px' }} variant='h5'>
      {primary.toUpperCase()}
    </Typography>
    <Typography color='textPrimary' style={{ fontSize: '38px' }} variant='h3'>
      {secundary}
    </Typography>
  </Box>
);
