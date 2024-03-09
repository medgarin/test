export const mainProjects: IProject[] = [
  {
    name: "Red Social",
    description:
      "Desarrollé un clon de Instagram como proyecto personal, expandiendo las funcionalidades de autenticación con registro de usuarios, gestión de tokens de autenticación y sistema de paginación. Utilicé Node.js con Express.js para construir el servidor backend y MongoDB para la persistencia de datos. En el frontend, implementé la interfaz de usuario utilizando React.js, aprovechando su capacidad para crear componentes reutilizables y mantener una interfaz de usuario dinámica y receptiva. Este proyecto me permitió adquirir experiencia práctica en el desarrollo de aplicaciones web completas, desde la autenticación de usuarios hasta la gestión de datos y la integración de tecnologías frontend modernas como React",
    image: "instagram.PNG",
    github: "https://miflink.com/",
  },
  {
    name: "App de turismo",
    description:
      "Como desarrollador backend, lideré el diseño de la base de datos para una aplicación de turismo utilizando PostgreSQL. Implementé un esquema relacional eficiente que almacena datos de destinos turísticos, usuarios, reservas y comentarios.",
    image: "turismo.png",
  },
  {
    name: "Logros Academicos",
    description:
      "Participé y gané dos veces la etapa local del concurso InnovateTECNM, demostrando habilidades en desarrollo de proyectos completos con enfoque en backend y conocimientos básicos de frontend",
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
  | "frontend"
  | "backend"
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
