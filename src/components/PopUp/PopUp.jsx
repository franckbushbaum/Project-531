import React from 'react';
import './PopUp.css';
// import { GiFlatHammer, GiAxeSword, GiCrossShield, GiGuitar } from "react-icons/gi";

function PopUp({ target }) {

    console.log('Target in popup is: ', target)

  return (
      <div>{target}:concentration of particulate matter smaller than 10 microns</div>
  )
}

export default PopUp;