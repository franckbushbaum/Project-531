import React, { useState, useEffect } from 'react';
import './AirQuality.css';

import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";

import moment from 'moment';
import { AirlineSeatReclineNormalOutlined } from '@mui/icons-material';


function AirQuality({ hour }) {

//1 destructured was in an object. 
console.log('destructured data?', hour);

//2 Option A:
  const {aqi} = hour;
  // console.log('what is the aqi??', aqi)

//3 Option B:

  const [grade, setGrade] = useState('ten');

  const setColor = () => {
    // console.log('setColor fires:')
    // console.log('what is aqi?', aqi);
      if(0 < aqi && aqi < 20){
        setGrade('ten')
      } else if (20 <= aqi && aqi < 30){
        setGrade('twenty')
      } else if (30 <= aqi && aqi < 40){
        setGrade('thirty')
      } else if (40 <= aqi && aqi < 50){
        setGrade('forty')
      } else if (50 <= aqi && aqi < 60){
        setGrade('fifty')
      } else if (60 <= aqi && aqi < 70){
        console.log('FUNCTION SHOULD HIT HERE??!')
        setGrade('sixty')
      } else if (70 <= aqi && aqi < 80){
        setGrade('seventy')
      } else if (80 <= aqi && aqi < 90){
        setGrade('eighty')
      } else if (90 <= aqi && aqi < 100){
        setGrade('ninety')
      }
      for (const key of Object.keys(hour)){
        console.log(`${key} has a value of ${hour[key]}`)
      }
    //  console.log('what is grade?', grade);
  }

  // console.log('what is GRADE?', grade);

  console.log('what is hour?', hour)

  useEffect(() => {
    if(aqi){
      setColor();
    }
  }, [aqi])

  // useEffect(() => {
  //     setColor();
  // }, [])

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
        <span className="nfdn-active">
          pm10:<br />{hour.pm10}
        </span>
        <span className="nfdn-active">
          pm25:<br />{hour.pm25}
        </span>
        <span className="nfdn-active">
          C0: <br /> {hour.co}
        </span>
        <span className="nfdn-active">
          N02: <br /> {hour.no2}
        </span>
        <span className="nfdn-active">
          03: <br /> {hour.o3}
        </span>
      </div>
      {/* //2  Air Quality Index [US - EPA standard 0 - +500] */}
      {/* <span className="first-span">
        <BsFillCloudDrizzleFill />  On {(moment(hour.timestamp_local).format('MMMM Do YYYY, h:mm:ss a'))} <BsFillBrightnessHighFill /><br />
        Air Quality Index : <span className={grade}>{aqi}</span> <br />
        pm10: concentration of particulate matter smaller than 10 microns : {hour.pm10}.<br />
        pm25: concentration of particulate matter small than 25 micros: {hour.pm25}.<br />
        03: Trioxygen, the layer of ozone protecting the Earth from harmful rays.<br />
        NO2: More dangerous than Carbon Dioxide for the environment? 300% more potent.<br />
        CO: Carbon Monoxodie.{hour.co}
      </span> */}
    </div>

  );
}

export default AirQuality;