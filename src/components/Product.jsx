import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Highlight } from "react-instantsearch-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./../actions/cart.actions";

const useStyles = makeStyles({
  card: {
    width: "100%",
    margin: 10,
  },
  price: {
    marginTop: "10px",
    fontWeight: "bold",
  },
});

const Product = ({ hit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products, hasDiscount } = useSelector((state) => state.cart);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" height="150" image={hit.image} />
        <CardContent>
          <Typography variant="h5" component="h2">
            <Highlight attribute="name" hit={hit} />
          </Typography>
          <Typography className={classes.price}>
            $
            {hasDiscount && hit.salePrice >= 250
              ? Math.round(hit.salePrice * 0.5 * 100) / 100 + " (-50%)"
              : hit.salePrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {products[hit.objectID] ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(removeFromCart(hit))}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addToCart(hit))}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Product;
