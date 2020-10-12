import { makeStyles } from "@material-ui/core/styles";

const blogStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default blogStyles;
