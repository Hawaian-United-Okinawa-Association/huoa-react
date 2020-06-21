import React from 'react';
import { render } from '@testing-library/react'
import About from './About';

describe('The About Page', () => {
  it('defines the About page component', () => {
    const result = render(<About />);

    expect(result).toBeDefined();
  });
});
