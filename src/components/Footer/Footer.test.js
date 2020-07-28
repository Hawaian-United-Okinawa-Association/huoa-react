import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react'
import Footer from './Footer';

describe('Footer Component:', () => {

  it('is defined', () => {
    const result = render(<BrowserRouter><Footer /></BrowserRouter>);

    expect(result).toBeDefined();
  });

  it('loops through provided links and creates Link components', () => {
    // TODO: Need to add this
  });
});
