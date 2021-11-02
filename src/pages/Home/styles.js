import styled from "styled-components";
import { PageContent } from "../../components/PageContainer";
import { breakPoints } from "../../config";

export const Container = styled(PageContent)`
  padding: 5rem;
  @media screen and (max-width: ${breakPoints.small}) {
    padding: 0.8rem;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, max-content));
  /* background-color: blue; */

  margin: auto;
  max-width: 2000px;

  @media screen and (max-width: ${breakPoints.small}) {
    display: flex;
    flex-direction: column;
  }
`;

export const NotFound = styled.span``;

export const ResultAmount = styled.span`
  display: block;
  margin-bottom: 1.5rem;
`;
