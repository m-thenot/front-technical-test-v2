import { connectHits } from "react-instantsearch-dom";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { HitsProvided } from "react-instantsearch-core";
import ProductRecord from "../types/product";

const useStyles = makeStyles({
  root: {
    margin: "15px -12px",
    maxWidth: "100%",
  },
});

type Props = HitsProvided<ProductRecord>;

const Hits: React.FC<Props> = ({ hits }) => {
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

export default connectHits<Props, ProductRecord>(Hits);
