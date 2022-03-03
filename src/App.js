import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
