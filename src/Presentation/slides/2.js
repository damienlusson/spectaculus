import React from 'react';
import { Heading, Slide, Text, Layout, Appear } from 'spectacle';

class HeadingSlide {
  constructor(data) {
    this.data = data;
  }

  render() {
    return (
      <Slide bgColor="black">
        <Appear>
          <Heading textColor="white" size={1}>
            Expertise React
          </Heading>
        </Appear>
        <Appear>
          <Heading
            textFont="secondary"
            textColor="white"
            size={5}
            style={{ paddingBottom: 40, paddingTop: 10 }}
          >
            À la découverte de React & React Native
          </Heading>
        </Appear>
      </Slide>
    );
  }
}

export default HeadingSlide;
