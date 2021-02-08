import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "60px",
    backgroundColor: "#121212",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: "20px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography variant="h5" component="div">
        Next JS / Algolia Application
      </Typography>
    </header>
  );
};

export default Header;
