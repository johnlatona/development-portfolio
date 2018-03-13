import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from "./Components/Portfolio";

const App = () =>
  <Router>
    <Route path="/" component={Portfolio} />
  </Router>

export default App;
