import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import NewIngredient from './components/ingredients/new'
import IngredientsIndex from './components/ingredients'
import recipesRoutes from './routes/recipesRoutes'
import EditIngredient from './components/ingredients/edit';

const AppRouter = () => {

  const ingredientsRoutes = [
    { "route": "/ingredients/new", "renderComponent": <NewIngredient />},
    { "route": "/ingredients/:id/edit", "renderComponent": <EditIngredient />},
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