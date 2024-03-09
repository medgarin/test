import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import JavascriptIcon from "@mui/icons-material/Javascript";
import BugReportIcon from "@mui/icons-material/BugReport";

interface SvgIcon {}

export interface ISkill {
  description: string;
  Icon: SvgIcon;
  title: string;
}

export const skills: ISkill[] = [
  {
    description: "Diseño, implementación y documentación de APIs RESTful",
    Icon: ApiIcon,
    title: "Desarrollo de APIs",
  },
  {
    description:
      "Diseño de esquemas de bases de datos, consultas SQL avanzadas, optimización de consultas y manejo de bases de datos relacionales y NoSQL",
    Icon: StorageIcon,
    title: "Gestión de bases de datos",
  },
  {
    description:
      "Habilidad para identificar y solucionar problemas complejos en el backend",
    Icon: BugReportIcon,
    title: "Resolución de problemas y depuración",
  },
  {
    description:
      "Dominio de lenguajes de programación backend como Python, JavaScript (Node.js)",
    Icon: JavascriptIcon,
    title: "Programación en lenguajes backend",
  },
];
