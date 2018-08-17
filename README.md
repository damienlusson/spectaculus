# Spectaculus &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/greeeg/spectaculus/blob/master/LICENSE)

> Create awesome Spectacle presentations in a modularized way.

## Getting started
```sh
# Clone the repository
git clone https://github.com/greeeg/spectaculus.git my-presentation
cd my-presentation

# Install dependencies
yarn
```

## Usage
### Create slides templates
```js
import React from 'react';
import { Heading, Slide, Text } from 'spectacle';
import { Props } from '../../Spectaculus';

class IntroSlide extends Props {
  render() {
    return (
      <Slide bgColor="black">
        <Heading textColor="white" size={1}>
          {this.props.title}
        </Heading>
        <Text textColor="white" size={3}>{this.props.description}</Text>
      </Slide>
    );
  }
}

export default IntroSlide;
```

### Create a presentation using your slides templates
```js
import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Presentation } from '../Spectaculus';

const theme = createTheme(
  {
    white: '#f7f7f7',
    black: '#080808',
    blue: '#2752ff',
    grey: '#CECECE'
  },
  {
    primary: 'Helvetica'
  }
);

const slides = [
  {
    name: 'IntroSlide',
    import: import('./slides/IntroSlide')
  }
];

const MyPresentation = () => (
  <Presentation
    slides={slides}
    theme={theme}
    data={[
      {
        slideName: 'IntroSlide',
        title: 'Hello World',
        description: 'This is a cool description of my talk'
      }
    ]}
  />
);

export default MyPresentation;
```

For more details, check out the `Presentation` directory.

## License
Spectaculus is [MIT licensed](https://github.com/greeeg/spectaculus/blob/master/LICENSE).
