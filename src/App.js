import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddCocktail from "./components/AddCocktail";
import EditCocktail from "./components/EditCocktail";
import CocktailDetail from "./components/CocktailDetail";

const Drinks = [
  {
    strDrink: "Margarita",
    strIBA: "Contemporary Classics",
    strGlass: "Cocktail glass",
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strMeasure1: "1 1/2 oz ",
    strMeasure2: "1/2 oz ",
    strMeasure3: "1 oz ",
    notes: "Tastes better with a lime or lemon garnish",
  },
  {
    strDrink: "Vodka And Tonic",
    strIBA: null,
    strGlass: "Highball glass",
    strInstructions:
      "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
    strIngredient1: "Vodka",
    strIngredient2: "Tonic water",
    strMeasure1: "2 oz ",
    notes: "Go easy on the ice, add lime to top off.",
  },
  {
    strDrink: "Cosmopolitan",
    strIBA: "Contemporary Classics",
    strGlass: "Cocktail glass",
    strInstructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    strIngredient1: "Absolut Citron",
    strIngredient2: "Lime juice",
    strIngredient3: "Cointreau",
    strIngredient4: "Cranberry juice",
    strMeasure1: "1 1/4 oz ",
    strMeasure2: "1/4 oz ",
    strMeasure3: "1/4 oz ",
    strMeasure4: "1/4 cup ",
    notes: "Favorite drink, great for any occasion."
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="app-nav">
          <Navbar />
        </div>
        <main className="App_main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/cocktails"} render={(props) => <Dashboard {...props} drinks={`Vodka And Tonic`} />} />
            <Route exact path={"/addcocktail"} component={AddCocktail} />
            <Route
                exact
                path={"/cocktails/1"}
                component={CocktailDetail}
              />
              <Route
                exact
                path={"/edit/1"}
                component={EditCocktail}
              />
          </Switch>
        </main>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
