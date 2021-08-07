import {Component, React} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import IngredientField from './IngredientField'

const axios = require("axios").default;

class NewRecipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      dynamicFields: []
    }
    this.ingredientFieldRemoved = this.ingredientFieldRemoved.bind(this)
  }

  ingredientFieldRemoved(id){
    const dynamicFields = this.state.dynamicFields.filter(
      field => field.fieldId !== id
    )
    this.setState({dynamicFields})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let serialize = require("form-serialize");
    let form = document.querySelector(".resource-form");
    let serializedData = serialize(form, { hash: true, empty: true })
    let {ingredient_id, quantity, measurement} = serializedData.recipe.recipe_ingredients_attributes
    let attributes = []
    ingredient_id.forEach((v, i) => {
      let recipeIngredient = {ingredient_id: ingredient_id[i], quantity: quantity[i], measurement: measurement[i]}
      attributes.push(recipeIngredient)
    })
    serializedData.recipe.recipe_ingredients_attributes = attributes
    axios
      .post(
        "http://localhost:5000/recipes",
        serializedData
      )
      .then(() => {
        window.location.pathname = "/recipes";
      });
  };

  handleNewDynamicFieldButton = (e) => {
    const id = uuidv4()
    const dynamicFields = [
      ...this.state.dynamicFields,
      {
        key: `dynamic-field-${id}`,
        fieldId: id,
        onDelete: this.ingredientFieldRemoved
      }
    ]
    this.setState({dynamicFields})
  }

  render(){
    return (
      <div className="component-container">
        <h1>Create New Recipe</h1>
        <form
          className="resource-form resource-form--extended"
          onSubmit={e => e.preventDefault()}
        >
          <div className="resource-form__fields">
            <div className="resource-form__field">
              <TextField id="recipe_name" label="Nazwa" variant="outlined" name="recipe[name]" defaultValue="" fullWidth/>
            </div>
            <div className="resource-form__field">
              <TextField id="recipe_instructions" label="Instructions" variant="outlined" multiline name="recipe[instructions]" fullWidth defaultValue="" rows={4}/>
            </div>
          </div>
          <div className="resource-form__dynamic-fields">
            <h2 className="resource-form__section-label">Ingredients</h2>
            { this.state.dynamicFields.map(field => <IngredientField key={field.key} fieldId={field.fieldId} onDelete={field.onDelete}></IngredientField>) }
            <button className="resource-form__dynamic-fields__new-button" onClick={this.handleNewDynamicFieldButton}>
              <span class="material-icons-round">add_circle</span>
            </button>
          </div>
          
          <div className="resource-form__actions">
            <button className="button button--commit" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
  

export default NewRecipe;