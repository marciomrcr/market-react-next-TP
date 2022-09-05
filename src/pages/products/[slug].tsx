import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
  CardActionArea,
} from "@mui/material";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import http from "../../http";
import { Product } from "../../model";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      <Head>
        <title>{product.name} - Detalhes</title>
      </Head>
      {/* prettier-ignore */}
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader
        
          title={product.name.toLocaleUpperCase()}
          subheader={`R$ ${product.price}`}
        />
        <CardActionArea>
          <CardMedia
        
        sx={{ maxWidth: 280, margin: 4.9 }}
        component="img"
        height="240"          
        // style={{ paddingTop: "56%" }}
        image={product.image_url}
        alt="Produto"
      />
      <CardContent>
       
        <Typography variant="body2" color="primary" component="p">
          {product.description}
        </Typography>
      </CardContent>

        </CardActionArea>
        <CardActions >
          <Button  size="small" color="primary" component="a">
            Comprar
          </Button>
        </CardActions>
        
      </Card>
    </div>
  );
};

export default ProductDetailPage;

export const getStaticProps: GetStaticProps<
  ProductDetailPageProps,
  { slug: string }
> = async (context) => {
  const { slug } = context.params!;
  try {
    const { data: product } = await http.get(`products/${slug}`);

    console.log(product);
    return {
      props: {
        product,
      },
      revalidate: 1 * 5 * 2,
    };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return { notFound: true };
    }
    throw e;
  }
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const { data: products } = await http.get(`products`);
  const paths = products.map((p: Product) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: "blocking" };
};
