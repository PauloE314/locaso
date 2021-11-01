import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Content>Home</Content>
      <Footer />
    </Container>
  );
}
