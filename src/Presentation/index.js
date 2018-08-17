import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import availableSlides from './availableSlides';
import 'normalize.css';
import './utils/prism';
import './utils/prism.css';
import './utils/app.css';

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

class Presentation extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      slides: Array(this.props.data.length).fill(<Slide key="loading" />)
    };
  }

  renderSlide = (SlideConstructor, data) => {
    return new SlideConstructor(data).render();
  };

  async componentDidMount() {
    const slides = [];
    const imports = availableSlides.map(slide => slide.import);
    const importedSlides = await Promise.all(imports);

    this.props.data.forEach((dataSlide, index) => {
      const importedSlideIndex = availableSlides.findIndex(
        availableSlide => availableSlide.name === dataSlide.slideName
      );
      const renderedSlide = this.renderSlide(
        importedSlides[importedSlideIndex].default,
        dataSlide
      );
      slides.push(renderedSlide);
    });

    this.setState({ slides: slides });
  }

  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        contentWidth={1700}
        contentHeight={window.innerHeight}
        controls={false}
        progress="none"
        theme={theme}
      >
        {this.state.slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })}
      </Deck>
    );
  }
}

export default Presentation;
