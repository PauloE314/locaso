import styled from "styled-components";
import { PageContent } from "../../components/PageContainer";
import { breakPoints } from "../../config";

export const Container = styled(PageContent)``;

export const ProductList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, max-content));

  padding: 5rem;
  margin: auto;
  max-width: 2000px;

  @media screen and (max-width: ${breakPoints.small}) {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
  }
`;
