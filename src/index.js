import React from 'react';
import Preview from './preview';

const plugin = ({term, display, actions}) => {
  
  if (term.toLowerCase().startsWith('giphy')) {
    display({
      title: 'Giphy search',
      onSelect: () => {},
      getPreview: () => <Preview searchTerm={term} /> 
    });
  }
};

module.exports = {
  fn: plugin
};
