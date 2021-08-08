import axios from "axios";
import { Component } from "react";
import TextField from '@material-ui/core/TextField';
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
      ingredientData: null
    };
  }

  componentDidMount() {
    this.axios
      .get(`http://localhost:5000/ingredients/${this.resourceId}`)
      .then((response) => {
        this.setState({ ingredientData: response.data });
      });
  }

  formFields(){
    if(!this.state.ingredientData){
      return null
    } else {
      return(
        <div className="resource-form__fields">
            <div className="resource-form__field">
              <TextField id="ingredient_name" label="Nazwa" variant="outlined" name="ingredient[name]" defaultValue={this.state.ingredientData.name} fullWidth />
            </div>
            <div className="resource-form__field">
              <TextField id="ingredient_min_price" label="Cena Minimalna" variant="outlined" name="ingredient[min_price]" type="number" step=".01" fullWidth defaultValue={this.state.ingredientData.min_price}/>
            </div>
            <div className="resource-form__field">
              <TextField id="ingredient_max_price" label="Cena Maksymalna" variant="outlined" name="ingredient[max_price]" type="number" step=".01" fullWidth defaultValue={this.state.ingredientData.max_price}/>
            </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="component-container">
        <h1>Create New Ingredient</h1>
        <form
          className="resource-form"
        >
          { this.formFields() }
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
