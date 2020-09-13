import React, { Component } from "react";
import { withRouter } from "react-router";
import "./EditCocktail.css";
import PostsContext from "../contexts/PostsContext";
import config from "../config";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";

class EditCocktail extends Component {
  static contextType = PostsContext;

  state = {
    error: null,
    id: "",
    usernotes: "",
    rating: 1,
    strDrink: "",
    strTags: "",
    strCategory: "",
    strIBA: "",
    strGlass: "",
    strinstructions: "",
    strDrinkThumb: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
  };

  componentDidMount() {
    const { post_id } = this.props.match.params;
    fetch(config.API_ENDPOINT + `/drinks/${post_id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
        return res.json();
      })
      .then((responseData) => {
        this.setState({
          id: responseData.id,
          idDrink: responseData.idDrink,
          strDrink: responseData.strDrink,
          strTags: responseData.strTags,
          strCategory: responseData.strCategory,
          strIBA: responseData.strIBA,
          strGlass: responseData.strGlass,
          //maybe try responseData.strinstructions
          strinstructions: responseData.strinstructions,
          strDrinkThumb: responseData.strDrinkThumb,
          strIngredient1: responseData.strIngredient1,
          strIngredient2: responseData.strIngredient2,
          strIngredient3: responseData.strIngredient3,
          strIngredient4: responseData.strIngredient4,
          strIngredient5: responseData.strIngredient5,
          strIngredient6: responseData.strIngredient6,
          strIngredient7: responseData.strIngredient7,
          strMeasure1: responseData.strMeasure1,
          strMeasure2: responseData.strMeasure2,
          strMeasure3: responseData.strMeasure3,
          strMeasure4: responseData.strMeasure4,
          strMeasure5: responseData.strMeasure5,
          strMeasure6: responseData.strMeasure6,
          strMeasure7: responseData.strMeasure7,
          usernotes: responseData.usernotes,
          rating: Number(responseData.rating),
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  }
  handleChangeInstructions = (e) => {
    this.setState({ strinstructions: e.target.value });
  };

  handleChangeUsernotes = (e) => {
    this.setState({ usernotes: e.target.value });
  };

  handleChangeRating = (e) => {
    this.setState({ rating: Number(e.target.value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { post_id } = this.props.match.params;
    //this.state was updated by above handler functions
    const {
      id,
      idDrink,
      strDrink,
      strTags,
      strCategory,
      strIBA,
      strGlass,
      strinstructions,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      usernotes,
      rating,
    } = this.state;

    const newPost = {
      id,
      idDrink,
      strDrink,
      strTags,
      strCategory,
      strIBA,
      strGlass,
      strinstructions,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      usernotes,
      rating,
    };

    fetch(config.API_ENDPOINT + `/drinks/${post_id}`, {
      method: "PATCH",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
      })
      .then((res) => {
        this.resetFields(newPost);
        this.context.updateDrink(newPost);
        this.props.history.push("/cocktails");
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || "",
      idDrink: newFields.idDrink || "",
      strDrink: newFields.strDrink || "",
      strTags: newFields.strTags || "",
      strCategory: newFields.strCategory || "",
      strIBA: newFields.strIBA || "",
      strGlass: newFields.strGlass || "",
      strinstructions: newFields.strinstructions || "",
      strDrinkThumb: newFields.strDrinkThumb || "",
      strIngredient1: newFields.strIngredient1 || "",
      strIngredient2: newFields.strIngredient2 || "",
      strIngredient3: newFields.strIngredient3 || "",
      strIngredient4: newFields.strIngredient4 || "",
      strIngredient5: newFields.strIngredient5 || "",
      strIngredient6: newFields.strIngredient6 || "",
      strIngredient7: newFields.strIngredient7 || "",
      strMeasure1: newFields.strMeasure1 || "",
      strMeasure2: newFields.strMeasure2 || "",
      strMeasure3: newFields.strMeasure3 || "",
      strMeasure4: newFields.strMeasure4 || "",
      strMeasure5: newFields.strMeasure5 || "",
      strMeasure6: newFields.strMeasure6 || "",
      strMeasure7: newFields.strMeasure7 || "",
      usernotes: newFields.usernotes || "",
      rating: Number(newFields.rating) || "",
    });
  };

  handleClickCancel = () => {
    this.props.history.push("/cocktails");
  };

  render() {
    const {
      error,
      id,
      strDrink,
      strinstructions,
      strDrinkThumb,
      usernotes,
      rating,
    } = this.state;

    return (
      <div>
        <header>
          <h2 className="edit-cocktail-header">
            Edit <Link to={`/cocktails/${id}`}> {strDrink}</Link>
          </h2>
        </header>

        <section className="edit-post-section">
          <div className="edit-cocktail-item-body cocktail-image">
            <img
              src={strDrinkThumb}
              alt={strDrink}
              width="200px"
              height="200px"
            />
          </div>

          <form id="edit-post" onSubmit={this.handleSubmit}>
            <div className="EditPost__error" role="alert">
              {error && <p>{error.message}</p>}
            </div>
            <input type="hidden" name="id" />
            <div className="form-section">
              <label htmlFor="user-instructions">Modify recipe:</label>
              <textarea
                id="user-instructions"
                name="user-instructions"
                rows="10"
                placeholder="Custom instructions go here..."
                value={strinstructions || ""}
                onChange={this.handleChangeInstructions}
              ></textarea>
            </div>
            <div className="form-section">
              <label htmlFor="usernotes">Add your notes:</label>
              <textarea
                id="usernotes"
                name="usernotes"
                rows="10"
                placeholder="Notes go here..."
                value={usernotes || ""}
                onChange={this.handleChangeUsernotes}
              ></textarea>
            </div>

            <div className="ratings-container form-section">
              <label htmlFor="rating">
                <strong>Add a rating between 1 - 5:</strong>
              </label>
              <input
                id="rating"
                type="number"
                name="rating"
                min="1"
                max="5"
                default="1"
                value={rating}
                onChange={this.handleChangeRating}
              />
            </div>
            <button type="submit">Submit Changes</button>
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(EditCocktail);
