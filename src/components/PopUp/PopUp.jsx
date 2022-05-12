import React from 'react';
import './PopUp.css';
// import { GiFlatHammer, GiAxeSword, GiCrossShield, GiGuitar } from "react-icons/gi";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function PopUp({ target }) {

    console.log('Target in popup is: ', target)

  return (
      <div>{target}</div>
  )
}

export default PopUp;