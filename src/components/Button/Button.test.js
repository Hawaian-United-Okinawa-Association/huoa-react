import React from 'react';
import { render } from '@testing-library/react'

import Button from './Button';

test('button loads properly with a link', async () => {
  expect(() => render(<Button link='www.facebook.com/huoa'>Visit HUOA'S FB</Button>)).toBeDefined();
});

test('button loads property with an onClick', async () => {
  expect(() => render(<Button onClick={() => console.log('Hello')}>Say Hello</Button>)).toBeDefined();
});

test('button throws error without link or onClick', async () => {
  expect(() => render(<Button>Click me!</Button>)).toThrowError(new Error('Button requires a link or an onClick attribute'));
});
