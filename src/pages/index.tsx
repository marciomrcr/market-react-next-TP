import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import http from "../http";
import { Product } from "../model";

interface ProductListPageProps {
  products: Product[];
}

const ProductListPage: NextPage<ProductListPageProps> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Market App</title>
      </Head>
      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Produtos
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, key) => (
          <Grid key={key} item xs={12} sm={6} md={4}>
            <Card key={key}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {product.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="/products/[slug]"
                  as={`/products/${product.slug}`}
                  passHref
                >
                  <Button size="small" color="primary" component="a">
                    Detalhes
                  </Button>
                </Link>
              </CardActions>
              <CardMedia
                style={{ paddingTop: "56%" }}
                image={product.image_url}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductListPage;

export const getServerSideProps: GetServerSideProps<
  ProductListPageProps
> = async (context) => {
  const { data: products } = await http.get("products");
  console.log(products);
  return {
    props: {
      products,
    },
  };
};
