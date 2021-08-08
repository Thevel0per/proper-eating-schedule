import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ingredientsRoutes from "./routes/ingredientsRoutes";
import recipesRoutes from "./routes/recipesRoutes";

const AppRouter = () => (
  <Switch>
    {recipesRoutes.map(({ route, renderComponent }, index) => (
      <Route path={route} key={`recipes-route-${index}`}>
        {renderComponent}
      </Route>
    ))}
    {ingredientsRoutes.map(({ route, renderComponent }, index) => (
      <Route path={route} key={`ingredients-route-${index}`}>
        {renderComponent}
      </Route>
    ))}
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default AppRouter;
