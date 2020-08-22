import React, { Component } from "react";
import "./CocktailItem.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Rating from "./Rating";
import PostsContext from '../contexts/PostsContext';
import PostApiService from '../services/post-api-service';


class CocktailItem extends Component {
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
    const { id, idDrink, strDrink, strTags, strCategory, strIBA, strGlass, strInstructions, strDrinkThumb, strIngredient1, 
        strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strMeasure1, strMeasure2, 
        strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, usernotes, rating } = this.props

    return (
        <div className="cocktail-container-detail">
        <header className="cocktail-item-header">
        <h2 className="cocktail-item-name"><Link to={`/cocktails/${id}`}> {strDrink}</Link></h2>
        </header>
        <section className="cocktail-item-body">
          <div>
            <div className="cocktail-item-body cocktail-image">
            <img src={strDrinkThumb} alt={strDrink} width="200px" height="200px"/>
            </div>
            <div className="cocktail-item-body cocktail-detail">IBA Category: {strCategory}</div>
            <div className="cocktail-item-body cocktail-detail">{strGlass}</div>
     <ul className="cocktail-item-body cocktail-ingredients-measurements">
       <li>{strIngredient1} </li>
       <li>{strMeasure1}</li>
       <li>{strIngredient2}</li>
       <li>{strMeasure2} </li>
       <li>{strIngredient3}</li>
       <li>{strMeasure3} </li>
       <li>{strIngredient4}</li>
       <li>{strMeasure4} </li>
       <li>{strIngredient5}</li>
       <li>{strMeasure5} </li>
       <li>{strIngredient6}</li>
       <li>{strMeasure6}</li>
       <li>{strIngredient7}</li>
       <li>{strMeasure7} </li>
     </ul>
     <div className="cocktail-item-body cocktail-detail">{strInstructions}</div> 
     <div className="cocktail-item-body cocktail-detail">{usernotes}</div>
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


export default withRouter(CocktailItem);