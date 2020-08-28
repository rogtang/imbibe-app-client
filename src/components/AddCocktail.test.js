import React from 'react';
import ReactDOM from 'react-dom';
import AddCocktail from './AddCocktail';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddCocktail />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });