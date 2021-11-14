import { useRef } from "react";

import {
  Container,
  FilterLabel,
  FilterContainer,
  CategorySelect,
  PriceSelect,
} from "./styles";

import categories from "../../../config/categories.json";

export default function Filters({ onChange }) {
  const categoryRef = useRef(null);
  const orderRef = useRef(null);

  const handleConfigChange = () => {
    const category = categoryRef.current.value;
    const order = orderRef.current.value;

    onChange({ category, order });
  };

  return (
    <Container>
      <FilterContainer>
        <FilterLabel>Categoria: </FilterLabel>
        <CategorySelect ref={categoryRef} onChange={handleConfigChange}>
          <option value="">Todos</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </CategorySelect>
      </FilterContainer>

      <FilterContainer>
        <FilterLabel>Ordenar por: </FilterLabel>
        <PriceSelect ref={orderRef} onChange={handleConfigChange}>
          <option value="dec">Mais caro primeiro</option>
          <option value="asc">Mais barato primeiro</option>
        </PriceSelect>
      </FilterContainer>
    </Container>
  );
}
