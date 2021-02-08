import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  Pagination,
  SearchBox,
} from "react-instantsearch-dom";
import CustomHits from "src/components/CustomHits";
import Layout from "src/layout";
import { makeStyles } from "@material-ui/core/styles";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const useStyles = makeStyles({
  main: {
    padding: "3rem 0",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={classes.main}>
        <InstantSearch indexName="bestbuy" searchClient={searchClient}>
          <Configure hitsPerPage={20} />
          <SearchBox />
          <CustomHits />
          <Pagination />
        </InstantSearch>
      </main>
    </Layout>
  );
}
