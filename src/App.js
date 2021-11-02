import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";

import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar onSearch={setSearch} />
        <Switch>
          <Route path="/" exact>
            <Home search={search} />
          </Route>
          <Route path="/product/:id" exact>
            <Product />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
