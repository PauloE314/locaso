import { useEffect, useState } from "react";
import all from "../../config/products.json";

import Product from "./Product";
import Filters from "./Filters";

import { Container, ProductList, NotFound, ResultAmount } from "./styles";

const searchingMessage = (amount) => {
  if (amount > 1) return `${amount} items encontrados!!`;
  else if (amount === 1) return "1 item encontrado!!";
  return undefined;
};

export default function Home({ search }) {
  const [productList, setProductList] = useState(all);
  const found = !!productList.length;
  const message = searchingMessage(productList.length);

  useEffect(() => {
    const pattern = new RegExp("^" + search.toLowerCase());
    const filtered = all.filter(({ name }) => {
      return pattern.test(name.toLowerCase());
    });

    setProductList(filtered);
  }, [search]);

  return (
    <Container>
      {found ? (
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
