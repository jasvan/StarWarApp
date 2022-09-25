import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { map } from "lodash";


export default function Nevigation() {
  return (
    <Router>
      <Routes>         
        {map(routes, (route, index) => (
          <Route
           
            // key={index}
            // path={route.path}
            // exact={route.exact}
            // render={(props) => <route.component {...props} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
