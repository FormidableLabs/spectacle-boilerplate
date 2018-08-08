import React from 'react';
import { Heading, Text } from 'spectacle';

export default class RegularAssComponent extends React.Component {
  state = {
    count: 0
  };
  bumpDat = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  render() {
    return (
      <div>
        <Heading>Clap for dumb Medium post</Heading>
        <Text>{this.state.count}</Text>
        <button type="button" onClick={this.bumpDat}>Bump dat</button>
      </div>
    )
  }
}