import React from "react";
import "../../styles/ingredients/new.scss";
import TextField from '@material-ui/core/TextField';

const NewIngredient = (props) => {
  let axios = require("axios").default;

  const handleSubmit = (e) => {
    e.preventDefault();
    let serialize = require("form-serialize");
    let form = document.querySelector(".resource-form");
    axios
      .post(
        "http://localhost:5000/ingredients",
        serialize(form, { hash: true })
      )
      .then(() => {
        window.location.pathname = "/ingredients";
      });
  };

  return (
    <div className="component-container">
      <h1>Create New Ingredient</h1>
      <form
        className="resource-form"
      >
        <div className="resource-form__fields">
          <div className="resource-form__field">
            <TextField id="ingredient_name" label="Nazwa" variant="outlined" name="ingredient[name]" fullWidth/>
          </div>
          <div className="resource-form__field">
            <TextField id="ingredient_min_price" label="Cena Minimalna" variant="outlined" name="ingredient[min_price]" type="number" step=".01" fullWidth/>
          </div>
          <div className="resource-form__field">
          <TextField id="ingredient_max_price" label="Cena Maksymalna" variant="outlined" name="ingredient[max_price]" type="number" step=".01" fullWidth/>
          </div>
        </div>
        <div className="resource-form__actions">
          <button className="button button--commit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewIngredient;
