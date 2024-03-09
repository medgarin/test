import { Box, Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { GitHub } from "@material-ui/icons";

const social = [
  {
    path: "https://github.com/Sirakusa",
    Icon: GitHub,
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.secondary.contrastText,
  },
  iconContainer: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 50,
    cursor: "pointer",
  },
}));

export const FooterComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid container>
          <Grid></Grid>
          <Grid>
            <Box display="flex" alignItems="center" justifyContent="center">
              {social.map((media) => (
                <Link
                  className={classes.iconContainer}
                  key={media.path}
                  href={media.path}
                  rel="noopener"
                  target="_blank">
                  <media.Icon className={classes.icon} />
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
