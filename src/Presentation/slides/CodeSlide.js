import React from 'react';
import { Heading, Slide, Text, Layout } from 'spectacle';
import CodingSlide from 'spectacle-code-slide';

class CodeSlide {
  constructor(data) {
    this.data = data;
  }

  render() {
    return (
      <CodingSlide
        transition={[]}
        lang={this.data.lang}
        code={this.data.code}
        ranges={this.data.ranges}
      />
    );
  }
}

export default CodeSlide;
