import React, { Component } from "react";
import "./CocktailSummary.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Rating from "./Rating";
import PostsContext from '../contexts/PostsContext';
import PostApiService from '../services/post-api-service';


class CocktailSummary extends Component {
  static contextType = PostsContext;

  static defaultProps = {
    onDeletePost: () => { },
    drinks: []
};

componentDidMount() {
  PostApiService.getDrinks()
      .then(resJson =>
          this.setState({
              drinks: resJson
          }))
}

handleDelete = e => {
  e.preventDefault()
  const { id } = e.target
  //const postId = Number(id)
  PostApiService.deletePost(id)
  .then(data => this.context.deleteDrink(+id))
}

  render() {
    const { id, strDrink, strTags, strCategory, strIBA, strDrinkThumb, rating } = this.props

    return (
        <div className="cocktail-container-detail">
        <header className="cocktail-item-header">
        <h2 className="cocktail-item-name"><Link to={`/cocktails/${id}`}> {strDrink}</Link></h2>
        </header>
        <section className="cocktail-item-body">
          <div>
            <div className="cocktail-item-body cocktail-image">
            <img src={strDrinkThumb} alt={strDrink} width="250px" height="250px"/>
            </div>
            <div className="cocktail-item-body cocktail-detail">
            IBA Tags: {strTags}
          </div>
          <div className="cocktail-item-body cocktail-detail">
            {strIBA}
          </div>
          <div className="cocktail-item-body cocktail-detail">
            IBA Category: {strCategory}
          </div>
    <div className="cocktail-rating">
                <div>Rating: <Rating value={rating}/></div>
              </div>
              <Link to={`/edit/${id}`}>
            <button type="button" id={id}>Edit</button></Link>
            
            <button id={id} type="button" onClick={this.handleDelete}>Delete</button>
          </div>
        </section>
    </div>
    );
  }
}


export default withRouter(CocktailSummary);