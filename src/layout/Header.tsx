import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../reducers";

const useStyles = makeStyles({
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
  content: {
    maxWidth: "1280px",
    width: "100%",
    padding: "0 3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const StyledBadge = withStyles({
  badge: {
    right: -3,
    top: 5,
    padding: "0 4px",
  },
})(Badge);

const Header: React.FC = () => {
  const classes = useStyles();
  const count = useSelector((state: RootState) => state.cart.count);

  return (
    <header className={classes.root}>
      <div className={classes.content}>
        <Link href="/">
          <a>
            <Typography variant="h5" component="div">
              Next JS / Algolia Application
            </Typography>
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={count} color="primary">
                <ShoppingCartIcon htmlColor="white" />
              </StyledBadge>
            </IconButton>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
