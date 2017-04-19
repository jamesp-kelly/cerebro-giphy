import React from 'react';
import Preview from './preview';

const plugin = ({term, display, actions}) => {
  
  term = term.toLowerCase();

  if (term.startsWith('giphy')) {

    const [, ...remain] = term.split(' ');
    const searchTerm = remain.join(' ');

    display({
      title: 'Giphy search',
      onSelect: () => {},
      getPreview: () => <Preview searchTerm={searchTerm} /> 
    });
  }
};

module.exports = {
  fn: plugin
};
