import styled from "styled-components";
import { breakPoints } from "../../../config";

export const Container = styled.li`
  display: flex;

  flex-direction: column;
  border-radius: 0.2rem;
  padding: 1.5rem;
  background-color: white;

  @media screen and (max-width: ${breakPoints.small}) {
    margin-bottom: 1rem;
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
  width: 12rem;

  @media screen and (max-width: ${breakPoints.small}) {
    width: 70%;
    margin-bottom: 1rem;
  }
`;
