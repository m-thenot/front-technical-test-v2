import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginLeft: "0.5rem",
    height: "1em",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={classes.img} />
      </a>
    </footer>
  );
};
export default Footer;
