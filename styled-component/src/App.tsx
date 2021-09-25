import React from "react";
import { Login } from "./components/Login";
import { ModernLogin } from "./components/ModernLogin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ModernLogin} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
