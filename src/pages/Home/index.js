import { useEffect, useState } from "react";
import all from "../../config/products";

import Product from "./Product";
import Filters from "./Filters";

import { Container, ProductList, NotFound, ResultAmount } from "./styles";

const searchingMessage = (amount) => {
  if (amount > 1) return `${amount} items encontrados!!`;
  else if (amount === 1) return "1 item encontrado!!";
  return undefined;
};

const findProducts = (search, category, order) => {
  const namePattern = new RegExp("^" + search.toLowerCase());
  const categoryPattern = new RegExp("^" + (category || ""));

  const filtered = all.filter(({ name, category }) => {
    return (
      namePattern.test(name.toLowerCase()) &&
      categoryPattern.test(category || "")
    );
  });

  const sorted = filtered.sort((a, b) => {
    const priceA = Number(a.price.replace(",", "."));
    const priceB = Number(b.price.replace(",", "."));

    if (order === "dec") return priceB - priceA;
    else return priceA - priceB;
  });

  return sorted;
};

export default function Home({ search }) {
  const [filterConfig, setFilterConfig] = useState({
    category: "",
    order: "expensive",
  });
  const [productList, setProductList] = useState(all);
  const found = !!productList.length;
  const message = searchingMessage(productList.length);

  useEffect(() => {
    const { category, order } = filterConfig;
    const products = findProducts(search, category, order);

    setProductList(products);
  }, [search, filterConfig, filterConfig.category, filterConfig.order]);

  return (
    <>
      <Filters onChange={setFilterConfig} />
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
    </>
  );
}
