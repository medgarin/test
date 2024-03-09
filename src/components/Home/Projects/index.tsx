import { Box, Container } from "@material-ui/core";
import React from "react";
import { TitleSection } from "../../Section";
import { mainProjects } from "./const";
import { MainProject } from "./MainProject";

export const Projects = () => {
  return (
    <Container>
      <TitleSection
        primary='algunos proyectos'
        secundary='donde he dejado mi huella'
      />
      {mainProjects.map((project, index) => (
        <MainProject project={project} index={index} key={project.name} />
      ))}
    </Container>
  );
};
