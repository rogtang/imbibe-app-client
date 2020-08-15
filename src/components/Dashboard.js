import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //Dashboard only renders cocktail name, image, classification

    return (
      <section className="postsMain">
          <div className='hero-image'></div>
          <h1 className="dashboard-heading">Your Cocktails</h1>
          <div className='Posts__list'>
          <section>
            <h2>
              <h3><Link to={`/cocktails/1`}> Cosmopolitan</Link></h3>
            </h2>
            <img
              src="https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2017/10/cosmopolitan.jpg"
              alt="Cosmopolitan"
              width="200px"
              height="200px"
            />
            <p>IBA Category: Contemporary Classic</p>
            <Link to={`/edit/1`}>
            <button type="button" id={1}>Edit</button></Link>
            <button>Delete</button>
          </section>
          <section>
            <h2>
            <h3><Link to={`/cocktails/1`}> {this.props.drinks}</Link></h3>
            </h2>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg"
              alt="Vodka and Tonic"
              width="200px"
              height="200px"
            />
            <p>IBA Category:</p>
            <Link to={`/edit/1`}>
            <button type="button" id={1}>Edit</button></Link>
            <button>Delete</button>
          </section>
          <section>
            <h2>
            <h3><Link to={`/cocktails/1`}> Margarita</Link></h3>
            </h2>
            <img
              src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
              alt="Margarita"
              width="200px"
              height="200px"
            />
            <p>IBA Category: Contemporary Classics</p>
            <Link to={`/edit/1`}>
            <button type="button" id={1}>Edit</button></Link>
            <button>Delete</button>
          </section>
          </div>
      </section>
    );
  }
}

export default Dashboard;
