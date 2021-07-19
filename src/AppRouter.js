import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import RecipesIndex from './components/recipes';
import Home from './components/Home';
import NewRecipe from './components/recipes/new';
import NewIngredient from './components/ingredients/new';
import IngredientsIndex from './components/ingredients';

const AppRouter = () => {

  const recipesRoutes = [
    { "route": "/recipes/new", "renderComponent": <NewRecipe />},
    { "route": '/recipes', "renderComponent": <RecipesIndex />}
  ]

  const ingredientsRoutes = [
    { "route": "/ingredients/new", "renderComponent": <NewIngredient />},
    { "route": '/ingredients', "renderComponent": <IngredientsIndex />}
  ]

  return (
    <Switch>
      { recipesRoutes.map( ({route, renderComponent}) => <Route path={route}>{renderComponent}</Route>) }
      { ingredientsRoutes.map( ({route, renderComponent}) => <Route path={route}>{renderComponent}</Route>) }
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default AppRouter;