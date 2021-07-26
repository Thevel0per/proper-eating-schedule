import axios from "axios";
import { Component } from "react";
import "../../styles/ingredients/new.scss";

class EditIngredient extends Component {
  axios = require("axios").default;
  resourceId = window.location.pathname.match(/\d+/g)[0];

  handleSubmit = (e) => {
    e.preventDefault();
    let serialize = require("form-serialize");
    let form = document.querySelector(".resource-form");
    axios
      .put(
        `http://localhost:5000/ingredients/${this.resourceId}`,
        serialize(form, { hash: true })
      )
      .then(() => {
        window.location.pathname = "/ingredients";
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      ingredientData: {},
    };
  }

  componentDidMount() {
    this.axios
      .get(`http://localhost:5000/ingredients/${this.resourceId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ ingredientData: response.data });
      });
  }

  render() {
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
                  defaultValue={this.state.ingredientData.name}
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
                  defaultValue={this.state.ingredientData.min_price}
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
                  defaultValue={this.state.ingredientData.max_price}
                />
              </label>
            </div>
          </div>
          <div className="resource-form__actions">
            <button
              onClick={this.handleSubmit}
              className="button button--commit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditIngredient;
