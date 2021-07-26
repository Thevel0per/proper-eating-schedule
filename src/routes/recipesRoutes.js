import NewRecipe from '../components/recipes/new'
import RecipesIndex from '../components/recipes'

const recipesRoutes = [
  { "route": "/recipes/new", "renderComponent": <NewRecipe />},
  { "route": '/recipes', "renderComponent": <RecipesIndex />}
]

export default recipesRoutes;
  