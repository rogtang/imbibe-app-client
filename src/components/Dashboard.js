import React, { Component } from "react";
import "./Dashboard.css";
import CocktailItem from "./CocktailItem";
import PostsContext from "../contexts/PostsContext";

class Dashboard extends Component {
  static contextType = PostsContext;
  static defaultProps = {
    match: {
      params: {},
    },
    drinks: [],
  };

  render() {
    const { drinks = [] } = this.context;
    //Dashboard only renders cocktail name, image, classification

    return (
      <section className="postsMain">
        <div className="hero-image"></div>
        <h1 className="dashboard-heading">Your Cocktails</h1>
        <ul className="Posts__list" aria-live="polite">
          {drinks.map((post) => (
            <CocktailItem
              key={post.id}
              id={post.id}
              strDrink={post.strDrink}
              strDrinkThumb={post.strDrinkThumb}
              strCategory={post.strCategory}
              rating={post.rating}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Dashboard;
