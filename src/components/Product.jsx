import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Highlight } from "react-instantsearch-dom";

const useStyles = makeStyles({
  card: {
    width: "100%",
    margin: 10,
  },
  price: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const Product = ({ hit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={hit.image} />
      <CardContent>
        <Typography variant="h5" component="h2">
          <Highlight attribute="name" hit={hit} />
        </Typography>
        <Typography className={classes.price}>{hit.salePrice}€</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Product;
