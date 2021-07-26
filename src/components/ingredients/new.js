import React from "react";
import axios from "axios";
import "../../styles/ingredients/new.scss";

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
            <label
              className="mdc-text-field mdc-text-field--outlined"
              for="ingredient_name"
            >
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    Nazwa
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="text"
                id="ingredient_name"
                name="ingredient[name]"
                className="mdc-text-field__input"
                aria-labelledby="my-label-id"
              />
            </label>
          </div>
          <div className="resource-form__field">
            <label
              className="mdc-text-field mdc-text-field--outlined"
              for="ingredient_min_price"
            >
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    Cena Minimalna
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="number"
                id="ingredient_min_price"
                name="ingredient[min_price]"
                className="mdc-text-field__input"
                aria-labelledby="my-label-id"
                step=".01"
              />
            </label>
          </div>
          <div className="resource-form__field">
            <label
              className="mdc-text-field mdc-text-field--outlined"
              for="ingredient_max_price"
            >
              <span className="mdc-notched-outline">
                <span className="mdc-notched-outline__leading"></span>
                <span className="mdc-notched-outline__notch">
                  <span className="mdc-floating-label" id="my-label-id">
                    Cena Maksymalna
                  </span>
                </span>
                <span className="mdc-notched-outline__trailing"></span>
              </span>
              <input
                type="number"
                id="ingredient_max_price"
                name="ingredient[max_price]"
                className="mdc-text-field__input"
                aria-labelledby="my-label-id"
                step=".01"
              />
            </label>
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
