import { useEffect, useState } from "react";
import all from "../../config/products.json";

import Product from "./Product";
import Filter from "./Filter";

import { Container, ProductList, NotFound, ResultAmount } from "./styles";

export default function Home({ search }) {
  const [productList, setProductList] = useState(all);
  const message =
    productList.length !== 1
      ? `${productList.length} items encontrados!!`
      : "1 item encontrado!!";

  useEffect(() => {
    const pattern = new RegExp("^" + search.toLowerCase());
    const filtered = all.filter(({ name }) => {
      return pattern.test(name.toLowerCase());
    });

    setProductList(filtered);
  }, [search]);

  return (
    <Container>
      {productList.length ? (
        <>
          <ResultAmount>{message}</ResultAmount>
          <ProductList>
            {productList.map(({ name, image, price }, id) => (
              <Product key={id} name={name} image={image} price={price} />
            ))}
          </ProductList>
        </>
      ) : (
        <NotFound>Sinto muito, não temos esse item...</NotFound>
      )}
    </Container>
  );
}
