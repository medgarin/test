import { Container } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";

export const About = () => {
  return (
    <Container>
      <TitleSection
        primary='texto de prueba'
        secundary='Talk Or Meet With Me'
        props={{ marginBottom: "50px" }}
      />
    </Container>
  );
};
