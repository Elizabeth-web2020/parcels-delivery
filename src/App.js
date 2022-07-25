import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddParcel from "./components/AddParcel";
import EditParcel from "./components/EditParcel";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "60rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddParcel} />
            <Route path="/edit/:id" component={EditParcel} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
