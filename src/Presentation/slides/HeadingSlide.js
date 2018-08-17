import React from 'react';
import { Heading, Slide, Text, Layout } from 'spectacle';

class HeadingSlide {
  constructor(data) {
    this.data = data;
  }

  render() {
    return (
      <Slide bgColor="black">
        <Layout
          fit
          style={{
            height: (window.innerHeight - 120) * 0.9,
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          <Layout
            style={{
              position: 'relative',
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'flext-start',
              justifyContent: 'flex-end',
              textAlign: 'left'
            }}
          >
            <Heading textColor="white" size={1}>
              {this.data.title}
            </Heading>
            <Heading
              textFont="secondary"
              textColor="white"
              size={5}
              style={{ paddingBottom: 40, paddingTop: 10 }}
            >
              À la découverte de React & React Native
            </Heading>
          </Layout>
        </Layout>
      </Slide>
    );
  }
}

export default HeadingSlide;
