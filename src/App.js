import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ROUTES } from "src/Constants/routes";

const App = () => {
  return (
      <Router>
        <Routes>
          {ROUTES.map((route) => (
              <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Router>
  );
}

export default App;
