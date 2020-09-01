import React, { Component } from "react";
import "./AddCocktail.css";
import { withRouter } from "react-router";
import PostsContext from "../contexts/PostsContext";
import PostApiService from "../services/post-api-service";

class AddCocktail extends Component {
  static contextType = PostsContext;

  state = {
    error: null,
  };

  static defaultProps = {
    onAddPost: () => {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { cocktail_name } = e.target;
    const post = {
      search_drink: cocktail_name.value,
    };

    PostApiService.searchDrink(post.search_drink)
      .then((data) => {
        console.log(data);
        cocktail_name.value = "";
        this.context.addDrink(data);
        this.props.history.push("/cocktails");
        //window.location.assign('/cocktails');
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleClickCancel = () => {
    this.props.history.push("/cocktails");
  };

  render() {
    const { error } = this.state;
    return (
      <div className="add-cocktail-body">
        <header className="add-cocktail-header">
          <h1 className="add-cocktail-header">Search Cocktails</h1>
        </header>
        <section className="add-cocktail-section">
          <form
            id="add-cocktail"
            className="add-cocktail-form"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <div className="form-section">
              <label htmlFor="cocktail_name">Search by name of cocktail</label>
              <input
                id="cocktail_name"
                type="text"
                name="cocktail_name"
                placeholder="Gin and Tonic, Aviation, Manhattan..."
                required
              />
            </div>
            <button type="submit">Add Cocktail</button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
        <div className="EditPost__error" role="alert">
              {error && (
                <p>Sorry, we couldn't find that cocktail. Please try again.</p>
              )}
            </div>
      </div>
    );
  }
}

export default withRouter(AddCocktail);
