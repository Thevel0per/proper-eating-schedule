import {React, Component} from 'react'
import RecipeElement from './RecipeElement'
import '../../styles/recipes/index.scss'

class RecipesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: []
    }
  }

  axios = require('axios').default;

  componentDidMount(){
    this.axios.get('http://localhost:5000/recipes').then(
      response => {
        console.log(response.data)
        this.setState({recipes: response.data})
      }
    )
  }

  render() {
    return(
      <div className="component-container">
        <div className="component-container__header">
          <h1>Recipes</h1>
          <div className="component-container__actions">
            <a href="/recipes/new" className="button button--commit">New Recipe</a>
          </div>
        </div>
        <div className="recipes-list">
          { this.state.recipes.map(
              recipe => {
                return (
                  <RecipeElement recipeData={recipe}></RecipeElement>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

export default RecipesIndex;