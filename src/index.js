import React from 'react';
import App from './components/app/app';

const plugin = ({term, display, actions}) => {
  
  term = term.toLowerCase();

  console.log(term);

  if (term.startsWith('giphy')) {

    const [, ...remain] = term.split(' ');
    const searchTerm = remain.join(' ');

    display({
      title: 'Giphy search',
      onSelect: () => {},
      getPreview: () => <App searchTerm={searchTerm} /> 
    });
  }
};

module.exports = {
  fn: plugin
};
