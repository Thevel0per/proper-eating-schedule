import {React, Component} from 'react'
import IngredientElement from './IngredientElement'
import '../../styles/ingredients/index.scss'

class IngredientsIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredients: []
    }
  }

  axios = require('axios').default;

  componentDidMount(){
    this.axios.get('http://localhost:5000/ingredients').then(
      response => {
        console.log(response.data)
        this.setState({ingredients: response.data})
      }
    )
  }

  render() {
    return(
      <div className="component-container">
        <div className="component-container__header">
          <h1>Ingredients</h1>
          <div className="component-container__actions">
            <a href="/ingredients/new" className="button button--commit">New Ingredient</a>
          </div>
        </div>
        <div className="ingredients-list">
          { this.state.ingredients.map(
              ingredient => {
                return (
                  <IngredientElement ingredientData={ingredient}></IngredientElement>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

export default IngredientsIndex;