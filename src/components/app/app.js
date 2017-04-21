import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bricks from 'bricks.js';
import { getTrending, search } from '../../api';
import styles from '../../styles.css';
import Grid from '../grid/grid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null,
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      search(this.props.searchTerm).then(results => {
        this.setState({ gifs: results.data});

      });
    }
  }

  render() {
    const gifs = this.state.gifs;
    return <Grid gifs={gifs}></Grid>;
  }
}