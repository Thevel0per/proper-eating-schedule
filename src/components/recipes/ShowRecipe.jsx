import {React, Component} from 'react'
import '../../styles/recipes/show.scss'
import DeleteButton from '../shared/DeleteButton'

class ShowRecipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipe: {}
    }
  }

  axios = require("axios").default;

  componentDidMount(){
    let resourceId = window.location.pathname.match(/\d+/g)[0];
    this.axios.get(`http://localhost:5000/recipes/${resourceId}`).then(
      response => {
        console.log(response.data)
        this.setState({recipe: response.data})
      }
    )
  }

  recipeIngredients = () => {
    if(this.state.recipe.recipe_ingredients){
      console.log()
      return(
        this.state.recipe['recipe_ingredients'].map((ingredientData, index) =>
            <div className="recipe__ingredients__ingredient">
              <div className="recipe__ingredients__ingredient-data-row">
                <div className="recipe__ingredients__ingredient-data-row__cell">{ `${ingredientData.ingredient.name} ${ingredientData.quantity}${ingredientData.measurement}` }</div>
                <div className="recipe__ingredients__ingredient-data-row__cell recipe__ingredients__ingredient-data-row__cell--price">{`(${ingredientData.ingredient.min_price} - ${ingredientData.ingredient.max_price} zł)`}</div>
              </div>
              { index < this.state.recipe.recipe_ingredients.length - 1 ? <div className="divider"></div> : null }
            </div>
        )
      )
    }
  }

  dishCost = () => {
    if(this.state.recipe.recipe_ingredients){
      let minCost = this.state.recipe.recipe_ingredients.reduce((sum, ingredientData) => sum + ingredientData.ingredient.min_price, 0)
      let maxCost = this.state.recipe.recipe_ingredients.reduce((sum, ingredientData) => sum + ingredientData.ingredient.max_price, 0)
      return `${minCost} - ${maxCost} zł`
    }
  }

  render() {
    return(
      <div className="component-container--no-header">
        <article className="recipe">
          <header className="recipe__name">{this.state.recipe.name}</header>
          <section className="recipe__ingredients">
            <h2 className="recipe__ingredients__header">Ingredients</h2>
            { this.recipeIngredients() }
          </section>
          <section className="recipe__details">
            <h2 className="recipe__ingredients__header">Recipe</h2>
            { this.state.recipe.instructions }
          </section>
          <div className="recipe__cost">
            Dish cost: <span className="recipe__cost__value">{ this.dishCost() }</span>
          </div>
          <div className="recipe__actions">
            <DeleteButton></DeleteButton>
          </div>
        </article>
      </div>
    )
  }
}

export default ShowRecipe;