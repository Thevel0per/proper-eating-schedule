import {React, Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import IngredientField from './IngredientField'

const axios = require('axios').default

class EditRecipe extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipeData: {},
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

  componentDidMount(){
    const resourceId = window.location.pathname.match(/\d+/g)[0];
    axios.get(`http://localhost:5000/recipes/${resourceId}`).then(
      response => {
        const dynamicFields = response.data.recipe_ingredients.map(recipeIngredient => { 
            let fieldId = uuidv4()
            return {
              "key": fieldId,
              "fieldId": fieldId,
              "onDelete": this.ingredientFieldRemoved,
              "data": {
                "id": recipeIngredient.id,
                "ingredientId": recipeIngredient.ingredient.id,
                "quantity": recipeIngredient.quantity,
                "measurement": recipeIngredient.measurement
              }
            }
        })
        const recipeData = response.data
        this.setState({recipeData, dynamicFields})
      }
    )
  }

  formBody = () => {
    if(Object.keys(this.state.recipeData).length === 0){
      return null
    } else {
      return (
        <>
          <div className="resource-form__fields">
            <div className="resource-form__field">
              <TextField id="recipe_name" label="Nazwa" variant="outlined" name="recipe[name]" defaultValue={this.state.recipeData.name} fullWidth/>
            </div>
            <div className="resource-form__field">
              <TextField id="recipe_instructions" label="Instructions" variant="outlined" multiline name="recipe[instructions]" fullWidth defaultValue={this.state.recipeData.instructions} rows={4}/>
            </div>
          </div>
          <div className="resource-form__dynamic-fields">
            <h2 className="resource-form__section-label">Ingredients</h2>
            { this.state.dynamicFields.map(field => <IngredientField key={field.key} fieldId={field.fieldId} onDelete={field.onDelete} ingredientData={field.data}></IngredientField>) }
            <button className="resource-form__dynamic-fields__new-button" onClick={this.handleNewDynamicFieldButton}>
              <span class="material-icons-round">add_circle</span>
            </button>
          </div>
        </>
      )
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const resourceId = window.location.pathname.match(/\d+/g)[0];
    let serialize = require("form-serialize");
    let form = document.querySelector(".resource-form");
    let serializedData = serialize(form, { hash: true, empty: true })
    let {id, ingredient_id, quantity, measurement} = serializedData.recipe.recipe_ingredients_attributes
    let attributes = []
    let recipeIngredientIds = []
    ingredient_id.forEach((v, i) => {
      let recipeIngredient = {id: id[i], ingredient_id: ingredient_id[i], quantity: quantity[i], measurement: measurement[i]}
      recipeIngredientIds.push(Number(id[i]))
      attributes.push(recipeIngredient)
    })
    let ingredientsForDeletion = this.state.recipeData.recipe_ingredients.filter(recipeIngredient => !recipeIngredientIds.includes(recipeIngredient.id))
    ingredientsForDeletion.forEach(recipeIngredient => {
      let recipeIngredientData = {id: recipeIngredient.id, _destroy: true}
      attributes.push(recipeIngredientData)
    })
    console.log(attributes)
    serializedData.recipe.recipe_ingredients_attributes = attributes
    axios
      .put(
        `http://localhost:5000/recipes/${resourceId}`,
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
    return(
      <div className="component-container">
        <h1>Create New Recipe</h1>
        <form
          className="resource-form resource-form--extended"
          onSubmit={e => e.preventDefault()}
        >
          { this.formBody() }
          
          <div className="resource-form__actions">
            <button className="button button--commit" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditRecipe