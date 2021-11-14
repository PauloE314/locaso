import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakPoints } from "../../config";

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto minmax(10rem, 30rem) max-content;
  grid-template-areas: "nav-logo nav-search nav-menu";
  position: relative;
  padding: 2rem 4rem;
  background-color: var(--secondary-color);
  color: var(--bg-color);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: ${breakPoints.small}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "nav-logo nav-menu-button"
      "nav-menu nav-menu"
      "nav-search nav-search";
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.h1`
  grid-area: nav-logo;
  font-size: 2rem;
  margin: 0 1.5rem 0 0;

  & > * {
    color: inherit;
  }

  @media screen and (max-width: ${breakPoints.small}) {
    font-size: 1.5rem;
  }
`;

export const MenuButton = styled.button`
  grid-area: nav-menu-button;
  display: none;
  background-color: transparent;
  font-size: 1.7rem;
  opacity: ${({ activated }) => (activated ? 0.5 : 1)};
  transition: opacity 0.3s;
  color: var(--bg-color);

  @media screen and (max-width: ${breakPoints.small}) {
    justify-self: flex-end;
    display: block;
  }
`;

export const Menu = styled.div`
  grid-area: nav-menu;
  overflow: hidden;
  transition: max-height 0.2s;

  @media screen and (max-width: ${breakPoints.small}) {
    display: flex;
    flex-direction: column;
    max-height: ${({ show }) => (show ? "6.5rem" : "0")};
  }
`;

export const MenuLink = styled(Link)`
  margin-left: 1.5rem;
  color: var(--bg-color);
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  transition: opacity 0.3s;

  :hover {
    opacity: 1;
  }

  @media (max-width: ${breakPoints.small}) {
    margin-left: 0rem;
    padding: 1rem 0;
  }
`;

export const MenuLinkLabel = styled.span`
  margin-left: 1rem;
`;

export const Search = styled.div`
  grid-area: nav-search;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  border-radius: 2.5rem;
  padding: 0.3rem 0.7rem 0.3rem 1rem;
  font-size: 1rem;

  & > * {
    font-size: inherit;
    background-color: transparent;
  }

  @media (max-width: ${breakPoints.small}) {
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
`;

export const SearchIcon = styled.button`
  font-size: 1.5em;
  color: var(--secondary-color);
  font-weight: bold;
`;
