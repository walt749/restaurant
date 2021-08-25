import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import { Signup } from "./Components/Pages/Signup";
import { Login } from "./Components/Pages/Login";
import Menu from "./Components/Pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/menu" component={Menu}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
