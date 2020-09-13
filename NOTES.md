Login > Saving Token > Fetch User Drink list > Save User Drink List


deploy login:
demo@demo.com    (also used in dev env)
password123

test@test.com
test123

roger@roger.com  (also dev env)
roger


Component Structure:
- CocktailDetail is individual cocktail page
- CocktailItem is the info component that is used in Dashboard and CocktailDetail


todo: 
3. if drinkID already exists in table, don't use addDrink (line29) context to render in DOM

//from Bookmarks-react-client with state branch
constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }
const page = this.state.showAddForm
          ? <AddBookmark />
          : <BookmarkApp bookmarks={this.state.bookmarks}/>; 

const video = this.state.showVideo ? <ReactVideo/> : '';  ???





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
    rating: 8
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
    rating: 5
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
    notes: "Favorite drink, great for any occasion.",
    rating: 9
  },
];

Requirements
👍 This app does something interesting or useful (i.e. there are users for this app)
👍 This app uses the following stack: React, Node, Express, PostgreSQL (students may only use a different stack if first approved by their Program Manager)
❌ Both client- and server-side code must be tested.
❌ At a minimum, the student should test the happy path for each endpoint in the API and include a smoke test for each component in the React client.
❌ You are required to include a smoke test for each component in the React client. For example, I was expecting to find a smoke test for this component but was unable to do so. Please add the missing tests and resubmit your app.
👍 This app is responsive and works just as well on mobile devices as it does on desktop devices.
❌ The content on the app is clear and readable.
❌ Your landing page features text that does not have enough contrast with the background image, which is an accessibility issue for visually-impaired users. screenshot
❌ A similar issue exists on your Login, Register, and Add Cocktails pages.
❌ Please correct the accessibility issues that the WAVE Evaluation Tool detected. screenshot
👍 The students did not use styling frameworks like Bootstrap (they should only be using vanilla CSS).
❌ Both GitHub repos include comprehensive README files, which include:
👍 The name of the app at the top of the file
👍 A link to the live project
👍 Documentation of the API.
❌ Screenshot(s) of the app.
❌ Your API readme.md is missing screenshots.
👍 A summary section. This should have a concise explanation of what the app does.
👍 A section on the technology
👍 The app includes a landing page that explains what the app does and how to get started, in addition to pages required to deliver the main functionality.
👍 There is a live, publicly-accessible version of the app at a custom URL.
👍 The app includes a Favicon.
The app works across different browsers.
👍 If the app requires authentication, it includes demo credentials.
Styling Please rate the app's appearance 0-4 based on the following (they must score a 3 to pass):

👍 3 - The student has followed basic design best practices in styling their app and it looks portfolio-ready.
Code The student earns 1 point for each of the following and must earn a total of 3 points to pass:

👍 Their code follows consistent standards (use of indentation, semicolons, etc)
❌ There are no errors in the console when the app is running
❌ Your landing page generates a console error. screenshot
👍 Their code follows sound architectural patterns (the API is RESTful, separation of concerns, semantic HTML/JSX etc)
👍 The student has included comments where appropriate
❌ Additional Required Revisions
❌ I'm not able to edit a recipe and then see my edits when I subsequently use the Edit Recipe feature. screenshot screenshot
❌ Your Register page Email field should be of type 'email' so that it validates that an email was entered.
❌ I was able to enter "jeff" in the Register page for both the user name and password. After that I was redirected to the Registration page. When I entered my credentials there it said that my login information was not found.
I suspect that the Register page did not display a API error message to me and it should not have redirected me to the Login page.
There were various errors in the JS console. screenshot
You're off to a great start on this project; nice work!