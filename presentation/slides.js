import React from 'react';
import { Slide, Text } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import components from './components';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...components,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="black" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
