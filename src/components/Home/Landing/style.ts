import { makeStyles } from "@material-ui/core";

export const UseStyles = makeStyles((theme) => ({
  focus: {
    color: theme.palette.primary.main,
  },
  leyend: {
    backgroundColor: " rgba(13,179,199,.12)",
    fontSize: "14px",
    textTransform: "uppercase",
    padding: "15px 30px",
    display: "inline-block",
    fontWeight: 600,
    letterSpacing: "6px",
    color: "#0db3c7",
    [theme.breakpoints.down("md")]: {
      letterSpacing: "1px",
    },
  },
  mainText: {
    lineHeight: "70px",
    paddingBottom: "30px",
    letterSpacing: "-1.01px",
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      lineHeight: "45px",
    },
  },
  image: {
    position: "absolute",
    top: "-1px",
    height: "100%",
    width: "auto",
    right: 0,
    zIndex: -1,
    borderBottomRightRadius: "10%",
  },
}));
