import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Teams from "./components/teams/Teams";
import Team from "./components/teams/Team";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/teams/:id" component={Team} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
