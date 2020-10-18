import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Questionaire from "./pages/questionaire";
import Resources from "./pages/resources";
import NavBar from "./components/navbar/Navbar";
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/" component={Questionaire} />
        <Route path="/resources" component={Resources} />
      </Switch>
    </Router>
  </>
  );
}
export default App;
