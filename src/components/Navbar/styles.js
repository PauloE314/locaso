import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakPoints } from "../../style";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem 4rem;
  background-color: var(--bg-color);

  @media (max-width: ${breakPoints.small}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

export const MenuButton = styled.button`
  display: none;
  justify-self: flex-end;
  background-color: transparent;
  font-size: 1.7rem;
  opacity: ${({ activated }) => (activated ? 0.5 : 1)};
  transition: opacity 0.3s;

  @media (max-width: ${breakPoints.small}) {
    display: block;
  }
`;

export const Menu = styled.div`
  grid-column: 1 / 3;
  overflow: hidden;
  transition: max-height 0.3s;

  @media (max-width: ${breakPoints.small}) {
    display: flex;
    flex-direction: column;
    max-height: ${({ show }) => (show ? "6.5rem" : "0")};
  }
`;

export const MenuItem = styled(Link)`
  margin-left: 3rem;
  color: var(--secondary-color);
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  transition: opacity 0.3s;

  :hover {
    opacity: 1;
  }

  @media (max-width: ${breakPoints.small}) {
    margin-left: 0rem;
    padding-top: 2rem;
  }
`;

export const MenuItemLabel = styled.span`
  margin-left: 1rem;
`;
