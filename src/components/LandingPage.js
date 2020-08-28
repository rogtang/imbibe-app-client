import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <main role="main">
          <header className="landing-page-header">
            <h1>Imbibe</h1>
            <h2>Your Personal Cocktail Caddy.</h2>
          </header>
          <section className="landing-intro">
            <div className="container">
              <header>
                <h3 className="lp-heading">
                  Get recipes for your favorite cocktails and find new ones
                </h3>
              </header>
              <br />
              <p className="landing-page one">
                <br /> Ready to finally try an Aviation or see if a Bee's Knees
                is really the bee's knees? Wondering what's in a Corpse Reviver
                or how to make a French 75? Or do you just want a way to keep
                track of old favorites like an Old Fashioned or Cosmopolitan?{" "}
                <strong>Imbibe</strong> gets you ready for every taste or
                occasion, from hosting an intimate dinner party with friends to
                a group outing at the trendy speakeasy hidden inside a rustic
                barbershop.
              </p>
            </div>
            <div className="middle-image"></div>
          </section>
          <section className="landing-detail">
            <header>
              <h3 className="lp-heading">
                Explore the world of cocktails with Imbibe
              </h3>
            </header>
            <p className="landing-page two">
              Use Imbibe to search for cocktails by name and pin them to your
              personal Dashboard so you'll always have a handy list of favorites
              or new ones you've just heard about and have to try. From your
              Dashboard, find the ingredients for each drink and recipes so you
              can make them. Add your own notes, ratings or personal twists to
              each cocktail. Watch video tutorials for certain drinks. Get a
              drink's IBA (International Bartenders Association) information.
            </p>
            <h3>Find A New Favorite Today</h3>
            <p className="landing-page-links">
              <Link to="/register">Register</Link> for an account or{" "}
              <Link to="/login">login</Link> to demo the site.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default LandingPage;
