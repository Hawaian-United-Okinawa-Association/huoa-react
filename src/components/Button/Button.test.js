import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react'

import Button from './Button';

test('loads button properly', async () => {
  const button = render(<Button link='facebook.com'>Click me!</Button>);

  expect(button).toBeDefined();
});

test('throws error', async() => {
  const button = render(<Button>Click me!</Button>);
  
  expect(button).toThrow();
})
