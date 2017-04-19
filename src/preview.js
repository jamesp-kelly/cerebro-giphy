import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTrending } from './api';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null,
    }
  }

  componentDidMount() {
    getTrending().then(results => 
      this.setState({ gifs: results.data}));
  }

  render() {
    if (!this.state.gifs) {
      return <div>Please wait...</div>;
    }

    const gifs = this.state.gifs;

    return (
      <ul>
        {gifs.map((gif, index) => 
          <li>
            <img src={gif.images['fixed_height'].url} />
          </li>
        )}
        
      </ul>
    )
  }
}