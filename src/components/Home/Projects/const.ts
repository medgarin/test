export const mainProjects: IProject[] = [
  {
    name: "Red Social",
    description:
      "Desarrollé un clon de Instagram como proyecto personal, expandiendo las funcionalidades de autenticación con registro de usuarios, gestión de tokens de autenticación y sistema de paginación. Utilicé Node.js con Express.js para construir el servidor BackEnd y MongoDB para la persistencia de datos. En el FrontEnd, implementé la interfaz de usuario utilizando React.js, aprovechando su capacidad para crear componentes reutilizables y mantener una interfaz de usuario dinámica y receptiva. \n Este proyecto me permitió adquirir experiencia práctica en el desarrollo de aplicaciones web completas, desde la autenticación de usuarios hasta la gestión de datos y la integración de tecnologías FrontEnd modernas como React",
    image: "instagram.PNG",
    github: "https://miflink.com/", // Estamos seguros de que este es el enlace correcto?
  },
  {
    name: "App de Turismo",
    description:
      "Como desarrollador BackEnd, lideré el diseño de la base de datos para una aplicación de turismo utilizando PostgreSQL. Implementé un esquema relacional eficiente que almacena datos de destinos turísticos, usuarios, reservas y comentarios.",
    image: "turismo.png",
  },
  {
    name: "Logros académicos",
    description:
      "Participé y gané dos veces la etapa local del concurso InnovateTECNM, demostrando habilidades en desarrollo de proyectos completos con enfoque en BackEnd y conocimientos básicos de FrontEnd",
    image: "innovatecnm.jpeg",
  },
];

export interface IProject {
  name: string;
  description: string;
  image: string;
  technologies?: technology[];
  categories?: category[];
  href?: string;
  github?: string;
}

export type category =
  | "full-stack"
  | "FrontEnd"
  | "BackEnd"
  | "mobile"
  | "web"
  | "design";
export type technology =
  | "react"
  | "electron"
  | "nextjs"
  | "node"
  | "express"
  | "flask"
  | "react-native"
  | "angular"
  | "css"
  | "material-ui"
  | "bootstrap";
