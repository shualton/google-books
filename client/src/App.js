import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";

const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
  
  export default App;