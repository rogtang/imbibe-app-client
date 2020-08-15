import React, { Component } from "react";
import "./AddCocktail.css";
import { withRouter } from "react-router";

class AddCocktail extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const {cocktail_name} = e.target
    const post = {
      cocktail_name: cocktail_name.value,
    }

    const url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${post.cocktail_name}`;
    console.log(url)
    fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "02f452b098mshbeb1a53ff5f47a7p129c48jsnb1cb78d3a166",
    "Content-Type": "application/json",
	}
})
.then(res => {
  if(!res.ok) {
    throw new Error('Sorry, cocktail could not be found in database. Please try another search.');
  }
  return res.json();
})
.then(response => {
	console.log(response.drinks[0]);
})
.catch(error => {
	console.log(error);
});
  }  
  
  handleClickCancel = () => {
    this.props.history.push("/cocktails");
  };

  render() {
    return (
      <div>
        <header className="add-cocktail-header">
          <h1 className="add-cocktail-header">Search Cocktails</h1>
        </header>
        <section className="add-cocktail-section">
          <form
            id="add-cocktail"
            className="add-cocktail-form"
            onSubmit={e => this.handleSubmit(e)}
          >
            <div className="form-section">
              <label htmlFor="cocktail_name">Search by name of cocktail</label>
              <input
                id="cocktail_name"
                type="text"
                name="cocktail_name"
                placeholder="Vodka and Tonic"
                required
              />
            </div>
            <button type="submit">Add Cocktail</button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(AddCocktail);
