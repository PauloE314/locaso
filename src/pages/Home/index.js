import { useState } from "react";
import data from "../../config/products.json";

import Product from "./Product";
import Sidebar from "./Sidebar";
import Search from "./Search";

import { Container, ProductList } from "./styles";

export default function Home() {
  const [productList, setProductList] = useState(data);

  return (
    <Container>
      <Sidebar></Sidebar>
      <Search></Search>
      <ProductList>
        {productList.map(({ name, image, price }, id) => (
          <Product key={id} name={name} image={image} price={price} />
        ))}
      </ProductList>
    </Container>
  );
}
