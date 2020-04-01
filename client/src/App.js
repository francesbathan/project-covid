import React from "react";
import { Router } from "@reach/router";
import "./App.css";

import Header from "./views/Header";
import Home from "./views/Home";
import TestCenter from "./views/TestCenter";
import SubmitTest from "./views/SubmitTest";
import Resources from "./views/Resources";
import Donate from "./views/Donate";
import LoginPage from "./views/LoginPage";
import ApproveRej from "./views/ApproveRej";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <TestCenter path="/testing-centers" />
        <SubmitTest path="/submit" />
        <Resources path="/resources" />
        <Donate path="/donate" />
        <LoginPage path="/admin" />
        <ApproveRej path="/dashboard" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
