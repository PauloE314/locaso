import { useEffect, useRef, useState } from "react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { useLocation, useHistory } from "react-router";
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
  SearchIcon,
} from "./styles";

export default function Navbar({ onSearch }) {
  const searchRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const location = useLocation();
  const history = useHistory();

  const search = (content) => {
    onSearch(content);

    if (location.pathname !== "/") history.push("/");
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleChange = (e) => setSearchContent(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") search(searchContent);
  };
  const handleSearchIconClick = () => {
    if (searchContent.length) {
      searchRef.current.value = "";
      setSearchContent("");
    }
  };

  const searchBarIcon =
    searchContent.length === 0 ? <AiOutlineSearch /> : <AiOutlineClose />;

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
          onChange={handleChange}
        />
        <SearchIcon onClick={handleSearchIconClick}>{searchBarIcon}</SearchIcon>
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
