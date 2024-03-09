import { makeStyles, Theme } from "@material-ui/core";

interface Props {
  side: boolean;
}
export const useStyles = makeStyles<Theme, Props>((theme) => ({
  imageContainer: {
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  textContainer: {
    [theme.breakpoints.down("md")]: {
      order: 1,
    },
  },
  techList: {
    display: "flex",
    justifyContent: ({ side }) => (side ? "flex-end" : "flex-start"),
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
  tech: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(2),
  },
  github: {
    marginRight: theme.spacing(2),
  },
}));
