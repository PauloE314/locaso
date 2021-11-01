import { useState } from "react";
import { AiOutlineMenu, AiFillHome, AiOutlineUser } from "react-icons/ai";
import { useLocation } from "react-router";
import {
  Container,
  Logo,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemLabel,
} from "./styles";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Container>
      <Logo>Locaso</Logo>
      <MenuButton onClick={toggleMenu} activated={showMenu}>
        <AiOutlineMenu />
      </MenuButton>
      <Menu show={showMenu}>
        <MenuItem to="/" selected={location.pathname === "/"}>
          <AiFillHome />
          <MenuItemLabel>Home</MenuItemLabel>
        </MenuItem>
        <MenuItem to="/about" selected={location.pathname === "/about"}>
          <AiOutlineUser />
          <MenuItemLabel>Sobre</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Container>
  );
}
