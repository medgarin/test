import { Container, Grid, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { contactTypes } from "./const";
import { ContactType } from "./type";
import { GitHub } from "@material-ui/icons";

export const social = [
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

export const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TitleSection
        primary="medios de contacto"
        secundary="Contactame"
        props={{ marginBottom: "50px" }}
      />
      <Grid container spacing={7} direction="row" alignItems="center">
        {contactTypes.map((type) => (
          <Grid item key={type.text}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ContactType {...type} />
            </div>
          </Grid>
        ))}
        <div>
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
        </div>
      </Grid>
    </Container>
  );
};
