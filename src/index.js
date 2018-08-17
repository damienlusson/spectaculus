import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';

const code = `import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

import App from './App';

import './style.scss';

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
`;

const MyPresentation = () => (
  <Presentation
    data={[
      {
        slideName: 'HeadingSlide',
        title: 'Coucou'
      },
      {
        slideName: '2'
      },
      {
        slideName: 'HeadingSlide'
      },
      {
        slideName: 'CodeSlide',
        lang: 'js',
        code: code,
        ranges: [
          {
            loc: [0, 20],
            title: 'Walking through some code',
            note:
              'Heres a note! Heres a note! Heres a note!Heres a note! Heres a note! Heres a note! Heres a note! Heres a note!'
          },
          { loc: [0, 1], title: 'The Beginning' },
          {
            loc: [1, 2],
            note:
              'Heres a note! Heres a note! Heres a note!Heres a note! Heres a note! Heres a note! Heres a note! Heres a note!'
          },
          { loc: [2, 3] },
          { loc: [4, 7] },
          { loc: [8, 10] }
        ]
      }
    ]}
  />
);

ReactDOM.render(<MyPresentation />, document.getElementById('root'));
