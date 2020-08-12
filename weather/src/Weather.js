import React, { Component } from 'react';

export class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying weather for city {this.props.zip}</h1>
    );
  }
}

export const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

// WeatherDisplay as WeatherDisplay
// Export { PLACES }