import React from 'react'
import DeleteButton from '../shared/DeleteButton'

const IngredientElement = (props) => 
  <div className="ingredients-list__element" key={props.ingredientData.id}>
    <div>{props.ingredientData.id}</div>
    <div>{props.ingredientData.name}</div>
    <div>{props.ingredientData.min_price} PLN</div>
    <div>{props.ingredientData.max_price} PLN</div>
    <div className="ingredients-list__element__actions">
      <a href={`/ingredients/${props.ingredientData.id}/edit`} className="button button--commit">Edit</a>
      <DeleteButton url={`http://localhost:5000/ingredients/${props.ingredientData.id}`} redirectPath="/ingredients" ></DeleteButton>
    </div>
  </div>

export default IngredientElement