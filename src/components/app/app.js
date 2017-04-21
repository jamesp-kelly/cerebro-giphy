import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bricks from 'bricks.js';
import { debounce } from 'lodash';
import { getTrending, search } from '../../api';
import styles from '../../styles.css';
import Grid from '../grid/grid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null,
    };
    this.debouncedSearch = debounce((searchTerm) => {
      search(searchTerm).then(results => {
        this.setState({ gifs: results.data});
      });
    }, 1000); 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.debouncedSearch(this.props.searchTerm);
    }
  }

  render() {
    const gifs = this.state.gifs;
    return <Grid gifs={gifs}></Grid>;
  }
}