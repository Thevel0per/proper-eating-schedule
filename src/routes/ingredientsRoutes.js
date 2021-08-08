import NewIngredient from "../components/ingredients/NewIngredient";
import IngredientsIndex from "../components/ingredients/IngredientsIndex";
import EditIngredient from "../components/ingredients/EditIngredient";

const ingredientsRoutes = [
  { route: "/ingredients/new", renderComponent: <NewIngredient /> },
  { route: "/ingredients/:id/edit", renderComponent: <EditIngredient /> },
  { route: "/ingredients", renderComponent: <IngredientsIndex /> },
];

export default ingredientsRoutes;
