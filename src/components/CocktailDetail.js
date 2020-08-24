import React, { Component } from "react";
import CocktailItem from "./CocktailItem";
import { withRouter } from "react-router";
import "./CocktailDetail.css";
import { findDrink } from "../App";
import PostsContext from "../contexts/PostsContext";

class CocktailDetail extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    match: {
      params: {},
    },
  };

  handleClickCancel = () => {
    this.props.history.push('/cocktails')
  }

  render() {
    const { drinks } = this.context;
    const { post_id } = this.props.match.params;
    const drink = findDrink(drinks, parseInt(post_id)) || { content: "" };
    return (
      <section className="postDetail">
        <CocktailItem key={post_id} {...drink} />
              <button type="button" onClick={this.handleClickCancel}>Cancel</button>
              
      </section>
    );
  }
}

export default withRouter(CocktailDetail);
