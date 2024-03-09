import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { skills } from "./const";
import { Skill } from "./Skill";

export const SkillsContainer = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TitleSection primary="habilidades" secundary="Que puedo ofrecer" />
          <Typography>
            ¡Hola a todos! Mi nombre es Jose Luis Herrera, estudie Electronica
          </Typography>
          <Typography>
            en el Instituto Tecnologico de Durango y estoy encantado de
            compartir con ustedes mi entusiasmo por adentrarme en el mundo del
            desarrollo backend. Como ingeniero electrónico apasionado por la
            tecnología y la programación, estoy emocionado por explorar este
            campo dinámico y desafiante.
          </Typography>
        </Grid>
        <Grid item md={6}>
          {skills.map((item) => (
            <Skill key={item.title} {...item} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
