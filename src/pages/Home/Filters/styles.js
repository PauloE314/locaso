import styled from "styled-components";
import { breakPoints } from "../../../config";

export const Container = styled.ul`
  display: flex;
  padding: 2rem;
  background-color: white;

  & > * {
    margin-right: 5rem;
  }

  & > *:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${breakPoints.small}) {
    flex-direction: column;
    padding: 2rem;

    & > * {
      width: 100%;
      margin-bottom: 1rem;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FilterContainer = styled.div``;

export const FilterLabel = styled.span``;

export const CategorySelect = styled.select`
  margin-left: 0.3rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  outline: none;
  border: 0.2rem solid var(--secondary-color);
  color: var(--secondary-color);
  font-weight: bold;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.1s, color 0.1s;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  & > option {
    width: 3.5rem;
    background-color: red;
  }

  :hover {
    background-color: var(--secondary-color);
    color: white;
  }

  @media screen and (max-width: ${breakPoints.small}) {
    width: 100%;
    margin: 0.5rem;
  }
`;

export const PriceSelect = styled(CategorySelect)`
  & > option {
    width: 12rem;
    background-color: red;
  }
`;
