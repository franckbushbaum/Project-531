import { QrCodeScanner } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import './PopUp.css';
// import { GiFlatHammer, GiAxeSword, GiCrossShield, GiGuitar } from "react-icons/gi";

function PopUp({ target, hour }) {

  console.log('In Popup: what is hour again?', hour);

  const {codesc , no2desc, pm10desc, pm25desc, o3desc} = hour

  const [description, setDescription] = useState(pm10desc)

//7 the destrutured descriptions are passed to this function, useEffect is used to call that function every time the hovered target changes.
  const findDescription = (target) => {
    console.log('in findDescription', target)
    switch (target) {
        case 'pm10':
            setDescription(pm10desc)
            break;
        case 'pm25':
          setDescription(pm25desc)
            break;
        case 'co':
          setDescription(codesc)
            break;
        case 'no2':
          setDescription(no2desc)
            break;
        case 'o3':
          setDescription(o3desc)
           break;
    }
};

console.log('what is description?', description )

useEffect(() => {
  findDescription(target)
 }, [target])

  return (
      <div>{target}: {description} </div>
  )
}

export default PopUp;