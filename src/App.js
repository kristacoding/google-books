import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;