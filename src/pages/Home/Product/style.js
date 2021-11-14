import styled from "styled-components";
import { breakPoints } from "../../../config";

export const Container = styled.li`
  display: flex;
  min-width: 15rem;
  max-width: 25rem;

  flex-direction: column;
  border-radius: 1rem;
  border: 0.2rem solid transparent;
  padding: 1.5rem;
  background-color: white;
  cursor: pointer;
  transition: border 0.1s;

  :hover {
    border: 0.2rem solid var(--secondary-color);
  }

  @media screen and (max-width: ${breakPoints.small}) {
    margin-bottom: 1rem;
    max-width: 100%;
    min-width: 0%;
    width: 100%;
  }
`;

export const Name = styled.span`
  margin: 1rem 0 0.5rem 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Price = styled(Name)`
  margin: 0;
  color: var(--secondary-color);
`;

export const Image = styled.img`
  align-self: center;
  width: 100%;

  @media screen and (max-width: ${breakPoints.small}) {
    width: 70%;
    margin-bottom: 1rem;
  }
`;
