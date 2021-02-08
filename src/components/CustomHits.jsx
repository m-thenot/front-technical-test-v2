import { connectHits } from "react-instantsearch-dom";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "15px -12px",
    maxWidth: "100%",
  },
});

const Hits = ({ hits }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {hits.map((hit) => (
        <Grid key={hit.objectID} item xs={6} sm={3}>
          <Product hit={hit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default connectHits(Hits);
