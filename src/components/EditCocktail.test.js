import React from 'react';
import ReactDOM from 'react-dom';
import EditCocktail from './EditCocktail';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <EditCocktail />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });