import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Presentation } from '../Spectaculus';
import code from './codes/sample';
import './app.css';

const theme = createTheme(
  {
    white: '#f7f7f7',
    black: '#080808',
    blue: '#2752ff',
    grey: '#CECECE'
  },
  {
    primary: 'Larsseit',
    secondary: 'LarsseitLight'
  }
);

const slides = [
  {
    name: 'HeadingSlide',
    import: import('./slides/HeadingSlide')
  },
  {
    name: 'CodeSlide',
    import: import('./slides/CodeSlide')
  }
];

const MyPresentation = () => (
  <Presentation
    slides={slides}
    theme={theme}
    data={[
      {
        slideName: 'HeadingSlide',
        title: 'Hello World',
        description: 'This is a cool description about my talk'
      },
      {
        slideName: 'CodeSlide',
        lang: 'js',
        code: code,
        ranges: [
          {
            loc: [0, 20],
            title: 'Walking through some code',
            note: 'Heres a note!'
          },
          { loc: [0, 1], title: 'The Beginning' },
          {
            loc: [1, 2],
            note: 'Heres a note!'
          },
          { loc: [2, 3] },
          { loc: [4, 7] },
          { loc: [8, 10] }
        ]
      }
    ]}
  />
);

export default MyPresentation;
