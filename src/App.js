import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={Home} />
        <Route path="/product/:id" exact children={Product} />
        <Route path="/about" exact children={About} />
        <Route path="/404" children={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
