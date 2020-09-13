import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import AddCocktail from "./components/AddCocktail";
import EditCocktail from "./components/EditCocktail";
import CocktailDetail from "./components/CocktailDetail";
import PrivateRoute from "./utils/PrivateRoute";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";
import PostApiService from "./services/post-api-service";
import PostsContext from "./contexts/PostsContext";
import AuthenticationContext from "./contexts/AuthenticationContext";
import TokenService from "./services/token-service";

export const findDrink = (drinks = [], post_id) =>
  drinks.find((post) => post.id === post_id);

class App extends React.Component {
  state = {
    drinks: [],
    users: [],
    isAuthenticated: false,
    error: null,
  };

  setAuthentication = (isAuthenticated) => {
    this.setState({
      isAuthenticated
    })
  };

  setDrinksAndAuth = (drinks) => {
    this.setState({
      drinks,
      isAuthenticated: true,
      error: null,
    });
  };

  /*addDrink = (drink) => {
    this.setState({
      drinks: [...this.state.drinks, drink],
    });
  };*/

  updateDrink = (updatedDrink) => {
    const newDrink = this.state.drinks.map((drink) =>
      drink.id === updatedDrink.id ? updatedDrink : drink
    );
    this.setState({
      drinks: newDrink,
    });
  };

  deleteDrink = (drinkId) => {
    const newDrinks = this.state.drinks.filter((drink) => drink.id !== drinkId);
    this.setState({
      drinks: newDrinks,
    });
  };

  componentDidMount() {

    PostApiService.getDrinks()
      .then(this.setDrinksAndAuth)
      .catch((error) => this.setState({ error, isAuthenticated: false }));
  }

  render() {
    const authValue = {
      isAuthenticated: this.state.isAuthenticated,
    };
    const value = {
      drinks: this.state.drinks,
      setDrinks: this.setDrinksAndAuth,
      deleteDrink: this.deleteDrink,
      updateDrink: this.updateDrink,
    };
    return (
      <AuthenticationContext.Provider value={authValue}>
        <PostsContext.Provider value={value}>
          <div className="App">
            <div className="app-nav">
              <Navbar />
            </div>
            <main className="App_main">
              <Switch>
                <Route exact path={"/"} component={LandingPage} />
                <PublicOnlyRoute exact path={"/login"} component={LoginPage} />
                <PublicOnlyRoute
                  exact
                  path={"/register"}
                  component={RegistrationPage}
                />
                <PrivateRoute exact path={"/cocktails"} component={Dashboard} />
                <PrivateRoute
                  exact
                  path={"/cocktails/:post_id"}
                  component={CocktailDetail}
                />
                <PrivateRoute
                  exact
                  path={"/addcocktail"}
                  component={AddCocktail}
                />
                <PrivateRoute
                  exact
                  path={"/edit/:post_id"}
                  component={EditCocktail}
                />
              </Switch>
            </main>
            <div className="app-footer">
              <Footer />
            </div>
          </div>
        </PostsContext.Provider>
      </AuthenticationContext.Provider>
    );
  }
}

export default App;
