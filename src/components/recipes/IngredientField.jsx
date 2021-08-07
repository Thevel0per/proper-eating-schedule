import { React, Component } from 'react'
import { InputLabel, TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import "../../styles/recipes/ingredientField.scss";

const measurementsForSelect = [
  'ml',
  'l',
  'g',
  'kg',
  'cup',
  'spoon',
  'tea spoon'
]

const axios = require('axios').default

class IngredientField  extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredientsForSelect: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/ingredients').then(
      response => {
        this.setState({ingredientsForSelect: response.data})
      }
    )
  }

  measurementsSelectOptions = () => 
    measurementsForSelect.map((measurement, index) => 
      <MenuItem value={measurement} key={`measurement-${index}`}>{measurement}</MenuItem>
    )
  

  ingredientsSelectOptions = () => 
    this.state.ingredientsForSelect.map(ingredient => 
      <MenuItem value={ingredient.id} key={`ingredient-${ingredient.id}`}>{ingredient.name}</MenuItem>
    )

  render() {
    return (
      <div className="ingredient-field">
        <input type="hidden" id="recipe_ingredient_id" name="recipe[recipe_ingredients_attributes][id][]" value={this.props.ingredientData?.id || null}/>
        <FormControl fullWidth>
          <InputLabel id="recipe_ingredient_id_label">Ingredient</InputLabel>
          <Select
            labelId="recipe_ingredient_ingredient_id_label"
            id="recipe_ingredient_ingredient_id"
            label="Ingredient"
            name="recipe[recipe_ingredients_attributes][ingredient_id][]"
            defaultValue={this.props.ingredientData?.ingredientId || ""}
          >
            { this.ingredientsSelectOptions() }
          </Select>
        </FormControl>
        
        <TextField id="recipe_ingredient_quantity" label="Quantity" variant="outlined" name="recipe[recipe_ingredients_attributes][quantity][]" type="number" defaultValue={this.props.ingredientData?.quantity || ""} fullWidth/>
        <FormControl fullWidth>
          <InputLabel id="recipe_ingredient_measurement_label">Measurement</InputLabel>
          <Select
            labelId="recipe_ingredient_measurement_label"
            id="recipe_ingredient_measurement"
            label="Measurement"
            name="recipe[recipe_ingredients_attributes][measurement][]"
            defaultValue={this.props.ingredientData?.measurement || ""}
          >
            { this.measurementsSelectOptions() }
          </Select>
        </FormControl>
        <button className="ingredient-field__remove-button" onClick={() => this.props.onDelete(this.props.fieldId)}>
          <span className="material-icons-round" data-fieldid={this.props.fieldId}>
            backspace
          </span>
        </button>
      </div>
    )
  }
}

export default IngredientField