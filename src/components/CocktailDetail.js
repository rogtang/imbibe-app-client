import React, { Component } from "react";
import CocktailItem from "./CocktailItem";
import { withRouter } from "react-router";
import "./CocktailDetail.css";
import { Link } from "react-router-dom";

class CocktailDetail extends Component {
  render() {
    /*const {
      strDrink,
      strIBA,
      strGlass,
      strInstruction,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      notes,
    } = this.props;
*/

    return (
      <div className="cocktail-container-detail">
        <header className="cocktail-item-header">
          <h2 className="cocktail-item-name">Margarita</h2>
        </header>
        <section className="cocktail-item-body">
          <div>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
              alt="Margarita"
              width="200px"
              height="200px"
            />
            <p>IBA Category: Contemporary Classics</p>
            <p>Type of glass: Cocktail glass</p>
            <ul>
              <li>Ingredient1 : "Tequila" </li>
              <li>Measure1": "1 1/2 oz "</li>
              <li>Ingredient2: "Triple sec" </li>
              <li>Measure2": "1/2 oz " </li>
              <li>Ingredient3: "Lime juice" </li>
              <li>Measure3": "1 oz " </li>
            </ul>
            <p>
              Instructions: "Rub the rim of the glass with the lime slice to
              make the salt stick to it. Take care to moisten only the outer rim
              and sprinkle the salt on it. The salt should present to the lips
              of the imbiber and never mix into the cocktail. Shake the other
              ingredients with ice, then carefully pour into the glass."
            </p>
            <p> User Notes: Tastes better garnished with lemon or lime. </p>
            <Link to={`/edit/1`}>
              <button type="button" id={1}>
                Edit
              </button>
            </Link>

            <button id={1} type="button" onClick={this.handleDelete}>
              Delete
            </button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(CocktailDetail);
