import React, { useState, useEffect } from 'react';
import './AirQuality.css';

import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";

import moment from 'moment';
import { AirlineSeatReclineNormalOutlined } from '@mui/icons-material';


function AirQuality({ hour }) {

//1 destructured was in an object. 

  console.log('destructured data?', hour);

//2 We have a value, in this case we will attempt to 
//2 use conditional styling to change an element's className when a value is above 50.

  const [limit, setLimit] = useState(false);

  const setColor = () => {
    console.log('what is hour.aqi?', hour.aqi);
    console.log('what is limit?', limit);
    hour.aqi > 50 ? setLimit(true) : setLimit(false);
}

  useEffect(() => {
    setColor();
}, [])

  return (
    <>
      <div className="hours">
        <div>
          <div className="modal-title">{(moment(hour.timestamp_local).format('MMMM Do YYYY, h:mm:ss a'))}</div>
          <ul>
              {/* //2  Air Quality Index [US - EPA standard 0 - +500] */}
              <li><span className="first-span">
              <BsFillCloudDrizzleFill />  On {(moment(hour.timestamp_local).format('MMMM Do YYYY, h:mm:ss a'))} <BsFillBrightnessHighFill /><br />
                                        WE HAD: <br />  
                                        Air Quality Index : <span className={limit ? 'aqi-moderate': 'aqi-low'}>{hour.aqi}</span> <br /> 
                                        pm10: concentration of particulate matter smaller than 10 microns : {hour.pm10}.<br />
                                        pm25: concentration of particulate matter small than 25 micros: {hour.pm25}.<br />
                                        03: Trioxygen, the layer of ozone protecting the Earth from harmful rays.<br />
                                        NO2: More dangerous than Carbion Dioxide for the environment? 300% more potent.<br />
                                        CO: Carbon Monoxodie.{hour.co}  
              </span></li>
          </ul>
        </div>
      </div>
                {/* className={limit ? 'aqi-moderate': 'aqi-low'} */}
    </>
  );
}

export default AirQuality;