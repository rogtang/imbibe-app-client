import React from 'react';
import ReactDOM from 'react-dom';
import CocktailDetail from './CocktailDetail';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CocktailDetail />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });