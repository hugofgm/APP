// import {collection, onSnapshot} from '@firebase/firestore'
// import { useState, useEffect } from 'react';
// import db from './firebase'
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import AboutMe from "./Components/AboutMe";
import Destinations from "./Components/Destinations";
import AdminForm from "./Components/AdminForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Navbar />
        <Switch>
          <Route path="/admin">
            <AdminForm />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/destinations">
            <Destinations />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
