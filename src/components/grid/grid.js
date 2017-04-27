import React, { Component } from 'react';
import ProTypes from 'prop-types';
import Bricks from 'bricks.js';
import styles from './grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.bricks = null;
    this.sizes = [
      { columns: 2, gutter: 10 },
      {mq: '900px', columns: 3, gutter: 10 },
      {mq: '1100px', columns: 4, gutter: 10 },
      {mq: '1300px', columns: 5, gutter: 10 },
      {mq: '1600px', columns: 6, gutter: 10 }
    ];
  }

  componentDidMount() {
    this.bricks = Bricks({
      container: this.gridElem,
      packed: 'data-packed',
      sizes: this.sizes
    });

    this.bricks.resize(true).pack();
  }

  componentDidUpdate(prevProps, prevState) {
    this.bricks.resize(true).pack();
  }

  renderGif(gif) {
    const fixedWidthGif = gif.images['fixed_width'];

    return (
      <div key={gif.id} style={{height: fixedWidthGif.height, width: '200px'}}>
        <img src={fixedWidthGif.url} />
      </div>
    );
  }

  render() {
    const { gifs: gifResults } = this.props;

    return (
      <div className="grid" ref={(elem) => this.gridElem = elem}>
        { gifResults ? gifResults.map((gif) => {
          return this.renderGif(gif);
        }) : 'Loading...'}
      </div>
    );
  }
}

export default Grid;