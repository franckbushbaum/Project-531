import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <Button variant="contained">Hello World</Button>
      <p>Info Page</p>
    </div>
  );
}

export default InfoPage;
