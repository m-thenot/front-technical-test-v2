import Head from "next/head";
import Layout from "src/layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  main: {
    padding: "1rem 0",
    minHeight: "calc(100vh - 180px)",
  },
  totalContainer: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "flex-end",
  },
  total: {
    maxWidth: "250px",
  },
});

const Cart = () => {
  const classes = useStyles();
  const { products, total, hasDiscount } = useSelector((state) => state.cart);

  return (
    <Layout>
      <Head>
        <title>Cart</title>
      </Head>
      <main className={classes.main}>
        <h1>Cart</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product name</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(products).map((key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    {products[key].name}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    ${Math.round(products[key].discountPrice * 100) / 100}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.totalContainer}>
          <TableContainer className={classes.total} component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Total</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    $
                    {hasDiscount
                      ? Math.round(total.discountPrices * 100) / 100
                      : Math.round(total.defaultPrices * 100) / 100}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
