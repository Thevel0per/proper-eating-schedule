import React from 'react'
import DeleteButton from '../shared/DeleteButton'

const RecipeElement = (props) => 
  <div className="recipes-list__element" key={props.recipeData.id}>
    <div>{props.recipeData.id}</div>
    <div>{props.recipeData.name}</div>
    <div className="recipes-list__element__actions">
      <a href={`/recipes/${props.recipeData.id}`} className="button button--details">Show</a>
      <a href={`/recipes/${props.recipeData.id}/edit`} className="button button--commit">Edit</a>
      <DeleteButton url={`http://localhost:5000/recipes/${props.recipeData.id}`} redirectPath="/recipes" ></DeleteButton>
    </div>
  </div>

export default RecipeElement