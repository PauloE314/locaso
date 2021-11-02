import { Container, Name, Image, Price } from "./style";

import { money } from "../../../utils";

export default function Product({ name, image, price }) {
  return (
    <Container title={name}>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Price>{money(price)}</Price>
    </Container>
  );
}
