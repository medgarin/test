import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: "80px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  transparent: {
    background: "transparent",
    boxShadow: "none",
    "& button": {
      color: "white",
    },
  },
  solid: {
    backgroundColor: "white",
    "& button": {
      color: "black",
    },
  },
  button: {
    font: "600 14px/30px Montserrat,sans-serif",
    fontWeight: "bold",
  },
}));
