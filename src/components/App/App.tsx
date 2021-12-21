import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Characters from "../Characters/Characters";
import Comics from "../Comics/Comics";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Characters />
              </Route>
              <Route exact path="/comics">
                <Comics />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
