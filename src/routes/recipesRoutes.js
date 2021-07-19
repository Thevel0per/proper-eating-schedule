import React from 'react';
import {
  Route
} from "react-router-dom";

const RecipesRoutes = () => 
  <div>
    <Route path="/recipes/new">
    <RecipesIndex />
    </Route>
    <Route path="/recipes">
      <RecipesIndex />
    </Route>
  </div>

export default RecipesRoutes;
  