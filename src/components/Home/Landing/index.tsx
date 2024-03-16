import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { UseStyles } from "./style";
import { DownloadFile } from "./downloadCV";

export const Landing = () => {
  const classes = UseStyles();

  return (
    <Fragment>
      <Box display={{ xs: "none", lg: "block" }}>
        <img src="/splash.svg" alt="me" className={classes.image} />
      </Box>
      <Container
        style={{
          alignSelf: "center",
          justifySelf: "center",
          height: "100%",
        }}>
        <Grid
          container
          style={{ height: "100%" }}
          justifyContent="center"
          alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h3" className={classes.mainText}>
              ¡Hola!
              <br />
              Soy Jose Luis y me dedico a convertir
              <span className={classes.focus}> ideas </span>
              en realidad
            </Typography>
            <Typography className={classes.leyend}>DESARROLLO DE SITIOS WEB</Typography>
            <Box display="flex" mt={4}>
              {DownloadFile()}
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box position="relative" width="100%">
              <img src="/thinking.svg" alt="think" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
