export interface ProductOficial {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  slug: string;
  price: number;
  created_at: string;
}

export const products: Product[] = [
  {
    id: "uuid",
    name: "Produto Teste",
    description: "Algum texto grande Algum texto grande v vAlgum texto grande",
    price: 120,
    image_url: "https://source.unsplash.com/random?product," + Math.random(),
    slug: "produto-teste",
    created_at: "2022-09-02T00:00:00",
  },

  {
    id: "uuid2",
    name: "Produto Teste 2",
    description: "Algum texto grande Algum texto grande v vAlgum texto grande",
    price: 100,
    image_url: "https://source.unsplash.com/random?product," + Math.random(),
    slug: "produto-teste2",
    created_at: "2022-09-02T00:00:00",
  },
  {
    id: "uuid3",
    name: "Produto Teste 3",
    description: "Algum texto grande Algum texto grande v vAlgum texto grande",
    price: 150.25,
    image_url: "https://source.unsplash.com/random?product," + Math.random(),
    slug: "produto-teste3",
    created_at: "2022-09-02T00:00:00",
  },
];

// export const productsOficial: ProductOficial[] = [
//   {
//     id: "uuid",
//     title: "Produto-Teste",
//     price: 150.25,
//     description: "Algum texto grande",
//     category: "Teste",
//     image: "https://source.unsplash.com/random/300x300",
//     rating: {
//       rate: 10,
//       count: 152,
//     },
//   },
// ];
