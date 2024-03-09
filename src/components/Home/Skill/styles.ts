import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  iconContainer: {
    padding: theme.spacing(1),
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  container: {
    position: "relative",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: "0 50px 150px 0 rgb(4 73 89 / 5%)",
    cursor: "pointer",
    margin: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
}));
