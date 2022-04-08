import React, { useState, useEffect } from 'react';
import './AirQuality.css';

import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";

import moment from 'moment';
import { AirlineSeatReclineNormalOutlined } from '@mui/icons-material';


function AirQuality({ hour }) {

  //1 destructured was in an object. 

  console.log('destructured data?', hour);

  const aqi = hour.aqi;

  //2 We have a value, in this case we will attempt to 
  //2 use conditional styling to change an element's className when a value is above 50.

  const [grade, setGrade] = useState('');

  const setColor = () => {
    console.log('setColor fires:')
    // console.log('what is hour.aqi?', hour.aqi);
    // console.log('what is limit?', limit);
    console.log('what is hour.aqi?', aqi);
    switch (aqi) {
      case aqi <= 10:
        setGrade('ten')
        break;
      case aqi <= 20:
        setGrade('twenty')
        break;
      case aqi <= 30:
        setGrade('thirty')
        break;
      case aqi <= 40:
        setGrade('forty')
        break;
      case aqi <= 50:
        setGrade('fifty')
        break;
      // case hour.aqi <= 60:
      //   setGrade('sixty')
      //   break;
      // case hour.aqi <= 70:
      //   setGrade('seventy')
      //   break;
      // case hour.aqi <= 80:
      //   setGrade('eighty')
      //   break;
      // case hour.aqi <= 90:
      //   setGrade('ninety')
      //   break;
      // case hour.aqi <= 100:
      //   setGrade('hundred')
      //   break;
    };
    console.log('what is grade?', grade);
  }

  console.log('what is THE FUCKIING grade?', grade);

  useEffect(() => {
    if(!grade){
      setColor()
    }
  }, [grade])

  return (

    <div className="hours">
      <div className="modal-title">
        {(moment(hour.timestamp_local).calendar())}
      </div>
      <div className="aqi-display">
        <div className={grade}>
          AQI<br />{aqi}
        </div>
      </div>
      <div className='next-five-container'>
        <span className="next-five-display-number">
          pm10<br />{hour.pm10}
        </span>
        <span className="next-five-display-number">
          pm25<br />{hour.pm25}
        </span>
        <span className="next-five-display-number">
          C0 <br /> {hour.co}
        </span>
        <span className="next-five-display-number">
          N02 <br /> {hour.no2}
        </span>
        <span className="next-five-display-number">
          03 <br /> {hour.o3}
        </span>
      </div>
      {/* //2  Air Quality Index [US - EPA standard 0 - +500] */}
      <span className="first-span">
        <BsFillCloudDrizzleFill />  On {(moment(hour.timestamp_local).format('MMMM Do YYYY, h:mm:ss a'))} <BsFillBrightnessHighFill /><br />
        Air Quality Index : <span className={grade}>{aqi}</span> <br />
        pm10: concentration of particulate matter smaller than 10 microns : {hour.pm10}.<br />
        pm25: concentration of particulate matter small than 25 micros: {hour.pm25}.<br />
        03: Trioxygen, the layer of ozone protecting the Earth from harmful rays.<br />
        NO2: More dangerous than Carbon Dioxide for the environment? 300% more potent.<br />
        CO: Carbon Monoxodie.{hour.co}
      </span>
    </div>

  );
}

export default AirQuality;