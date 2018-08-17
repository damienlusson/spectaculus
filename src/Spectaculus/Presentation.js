import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Deck, Slide } from 'spectacle';
import 'normalize.css';
import './utils/prism';
import './utils/prism.css';

class Presentation extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    slides: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired
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
    const imports = this.props.slides.map(slide => slide.import);
    const importedSlides = await Promise.all(imports);

    this.props.data.forEach((dataSlide, index) => {
      const importedSlideIndex = this.props.slides.findIndex(
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
        theme={this.props.theme}
      >
        {this.state.slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })}
      </Deck>
    );
  }
}

export default Presentation;
