import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTrending, search } from './api';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null,
    }
  }

  componentDidMount() {
    getTrending().then(results => {
      this.setState({ gifs: results.data});
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      search(this.props.searchTerm).then(results => {
        this.setState({ gifs: results.data});
      });
    }
  }

  render() {
    if (!this.state.gifs) {
      return <div>Please wait...</div>;
    }

    const gifs = this.state.gifs;

    return (
      <ul>
        {gifs.map((gif, index) => 
          <li key={index}>
            <img src={gif.images['fixed_height'].url} />
          </li>
        )}
        
      </ul>
    )
  }
}