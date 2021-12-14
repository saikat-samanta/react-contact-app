// jshint esversion: 9
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddContact from "./component/AddContact";
import UpdateContact from "./component/UpdateContact";
import ContactBook from "./component/ContactBook";
import Header from "./component/Header";
import MenuCard from "./component/MenuCard";
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <>
      <Header />
      <Route exact path="/">
      <MenuCard />
      </Route>
      <Route exact path="/contactbook">
        <ContactBook />
      </Route>
      <Route exact path="/add">
        <AddContact />
      </Route>
      <Route path="/update">
        <UpdateContact />
      </Route>
    </>
    </Router>
  );
}

export default App;
