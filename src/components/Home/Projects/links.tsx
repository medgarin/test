import { Box, Icon } from "@material-ui/core";
import { ExitToApp, GitHub } from "@material-ui/icons";
import React from "react";

interface Props {
  github?: string;
  href: string;
  githubClass?: string;
  boxClass: string;
}
export const Links: React.FC<Props> = ({
  boxClass,
  href,
  github,
  githubClass,
}) => {
  const gitHub = github ? (
    <a
      href={github}
      target='_blank'
      rel='noopener noreferrer'
      className={githubClass}
    >
      <GitHub fontSize='large' color='secondary' />
    </a>
  ) : null;
  const exitToApp = href ? (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <ExitToApp fontSize='large' color='secondary' />
    </a>
  ) : null;

  return (
    <Box className={boxClass}>
      {gitHub}
      {exitToApp}
    </Box>
  );
};
