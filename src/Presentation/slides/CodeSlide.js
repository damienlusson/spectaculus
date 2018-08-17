import React from 'react';
import CodingSlide from 'spectacle-code-slide';
import { Props } from '../../Spectaculus';

class CodeSlide extends Props {
  render() {
    return (
      <CodingSlide
        transition={[]}
        lang={this.props.lang}
        code={this.props.code}
        ranges={this.props.ranges}
      />
    );
  }
}

export default CodeSlide;
