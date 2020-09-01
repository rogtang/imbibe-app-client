import React, { Component } from "react";
import "./CocktailItem.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Rating from "./Rating";
import PostsContext from "../contexts/PostsContext";
import PostApiService from "../services/post-api-service";
import ReactPlayer from "react-player";

class CocktailItem extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    onDeletePost: () => {},
    drinks: [],
  };

  componentDidMount() {
    PostApiService.getDrinks().then((resJson) =>
      this.setState({
        drinks: resJson,
      })
    );
  }

  handleDelete = (e) => {
    e.preventDefault();
    const { id } = e.target;
    //const postId = Number(id)
    PostApiService.deletePost(id).then((data) => this.context.deleteDrink(+id));
    this.props.history.push("/cocktails");
  };

  render() {
    const {
      id,
      strDrink,
      strTags,
      strCategory,
      strGlass,
      strInstructions,
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
      strVideo,
    } = this.props;

    const ing2 = this.props.strIngredient2 ? <li>{strIngredient2}</li> : "";
    const meas2 = this.props.strMeasure2 ? <li>{strMeasure2}</li> : "";
    const ing3 = this.props.strIngredient3 ? <li>{strIngredient3}</li> : "";
    const meas3 = this.props.strMeasure3 ? <li>{strMeasure3}</li> : "";
    const ing4 = this.props.strIngredient4 ? <li>{strIngredient4}</li> : "";
    const meas4 = this.props.strMeasure4 ? <li>{strMeasure4}</li> : "";
    const ing5 = this.props.strIngredient5 ? <li>{strIngredient5}</li> : "";
    const meas5 = this.props.strMeasure5 ? <li>{strMeasure5}</li> : "";
    const ing6 = this.props.strIngredient6 ? <li>{strIngredient6}</li> : "";
    const meas6 = this.props.strMeasure6 ? <li>{strMeasure6}</li> : "";
    const ing7 = this.props.strIngredient7 ? <li>{strIngredient7}</li> : "";
    const meas7 = this.props.strMeasure7 ? <li>{strMeasure7}</li> : "";

    const tags = this.props.strTags
      ? strTags
          .split(",")
          .join(", ")
          .replace(/([a-z])([A-Z])/g, "$1 $2")
      : "None";

    const video = this.props.strVideo ? (
      <div className="cocktail-video">
        <ReactPlayer
          url={strVideo}
          width="100%"
          height="100%"
          className="react-player"
          controls
        />
      </div>
    ) : (
      <p className="hidden">Sorry, no video for this drink is available</p>
    );

    return (
      <div className="cocktail-container-detail">
        <header className="cocktail-item-header">
          <h2 className="cocktail-item-name">
            <Link to={`/cocktails/${id}`}> {strDrink}</Link>
          </h2>
        </header>
        <section className="cocktail-item-body">
          <div>
            <div className="cocktail-item-body cocktail-image">
              <img
                className="img-large"
                src={strDrinkThumb}
                alt={strDrink}
                width="350px"
                height="350px"
              />
            </div>
            <div className="cocktail-item-body cocktail-detail">
              IBA Tags: {tags}
            </div>
            <div className="cocktail-item-body cocktail-detail">
              IBA Category: {strCategory}
            </div>
            <div className="cocktail-item-body cocktail-detail">
              Type of Glass: {strGlass}
            </div>
            <div className="cocktail-item-body cocktail-detail">
              Ingredients:
            </div>
            <ul className="cocktail-item-body cocktail-ingredients-measurements">
              <li>{strIngredient1} </li>
              <li>{strMeasure1}</li>
              {ing2}
              {meas2}
              {ing3}
              {meas3}
              {ing4}
              {meas4}
              {ing5}
              {meas5}
              {ing6}
              {meas6}
              {ing7}
              {meas7}
            </ul>
            <div className="cocktail-item-body cocktail-detail">
              <strong>Instructions:</strong> {strInstructions}
            </div>
            <div className="cocktail-item-body cocktail-detail">
              <strong>Notes:</strong> {usernotes}
            </div>
            <div className="cocktail-item-body cocktail-detail cocktail-rating">
              <strong>Rating:</strong>
            </div>
            <Rating value={rating} />
            {video}

            <Link to={`/edit/${id}`}>
              <button type="button" id={id}>
                Edit
              </button>
            </Link>

            <button id={id} type="button" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(CocktailItem);
