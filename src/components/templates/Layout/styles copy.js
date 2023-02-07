import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  left: {
    maxWidth: 252,
  },
  right: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  layoutContainer: {
    overflowY: "auto",
    width: "100%",
    height: "95vh",
    flex: 1,
  },
  parent: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0px 24px 0px 8px",
    minHeight: "calc(100% - 108px)",
    width: "95%",
  },
  footer: {
    marginTop: theme.spacing(3),
  },
  topScreen: {
    marginBottom: "1em",
  },
  sinDatos: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
