import { useRef, useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuLink,
  MenuLinkLabel,
  Search,
  SearchInput,
  SearchButton,
} from "./styles";

export default function Navbar({ onSearch }) {
  const searchRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchRef.current.value);
  };

  return (
    <Container>
      <Logo>
        <Link to="/">Locaso</Link>
      </Logo>
      <MenuButton onClick={toggleMenu} activated={showMenu}>
        <AiOutlineMenu />
      </MenuButton>
      <Search>
        <SearchInput
          ref={searchRef}
          placeholder="O que deseja hoje?"
          onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={handleSearchClick}>
          <AiOutlineSearch />
        </SearchButton>
      </Search>
      <Menu show={showMenu}>
        <MenuLink to="/" selected={location.pathname === "/"}>
          <AiFillHome />
          <MenuLinkLabel>Home</MenuLinkLabel>
        </MenuLink>
        <MenuLink to="/about" selected={location.pathname === "/about"}>
          <AiOutlineUser />
          <MenuLinkLabel>Sobre</MenuLinkLabel>
        </MenuLink>
      </Menu>
    </Container>
  );
}
