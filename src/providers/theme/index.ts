import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0db4c7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#41b5ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
      paper: "#fefefe",
    },
    text: {
      secondary: "#677294",
      primary: "#040c2c",
      disabled: "#fafafa",
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "31px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "50px",
  },
};

theme.typography.h5 = {
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
};
