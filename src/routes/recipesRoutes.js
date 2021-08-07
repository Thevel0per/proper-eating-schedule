import NewRecipe from "../components/recipes/NewRecipe";
import RecipesIndex from "../components/recipes/RecipesIndex";
import ShowRecipe from "../components/recipes/ShowRecipe";
import EditRecipe from "../components/recipes/EditRecipe";

const recipesRoutes = [
  { route: "/recipes/new", renderComponent: <NewRecipe /> },
  { route: "/recipes/:id/edit", renderComponent: <EditRecipe /> },
  { route: "/recipes/:id", renderComponent: <ShowRecipe /> },
  { route: "/recipes", renderComponent: <RecipesIndex /> },
];

export default recipesRoutes;
