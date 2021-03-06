import React, { useState, useEffect } from 'react';
import './AirQuality.css';
import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";
import moment from 'moment';
import { AirlineSeatReclineNormalOutlined } from '@mui/icons-material';
import PopUp from '../PopUp/PopUp.jsx'


function AirQuality({ hour }) {

//2 Option A:
  const { aqi } = hour;

//3 Option B:

  const [grade, setGrade] = useState('ten');
  const [isHovering, setIsHovering] = useState(false)
  const [currentTarget, setCurrentTarget] = useState('')

  const setColor = () => {
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
        setGrade('sixty')
      } else if (70 <= aqi && aqi < 80){
        setGrade('seventy')
      } else if (80 <= aqi && aqi < 90){
        setGrade('eighty')
      } else if (90 <= aqi && aqi < 100){
        setGrade('ninety')
      }
      for (const key of Object.keys(hour)){
      //  console.log(`${key} has a value of ${hour[key]}`)
      }
  }

  useEffect(() => {
    if(aqi){
      setColor();
    }
  }, [aqi])

  const handleMouseEnter = (e) => {
    setIsHovering(true)
    setCurrentTarget(e.target.id)
  }

  const handleMouseLeave = (e) => {
    setIsHovering(false)
    setCurrentTarget('')
  }


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
        <span className="nfdn-active" id="pm10" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          pm10:<br />{hour.pm10}
        </span>
        <span className="nfdn-active" id="pm25" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          pm25:<br />{hour.pm25}
        </span>
        <span className="nfdn-active" id="co" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          C0: <br /> {hour.co}
        </span>
        <span className="nfdn-active" id="no2" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          N02: <br /> {hour.no2}
        </span>
        <span className="nfdn-active" id="o3" onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
          03: <br /> {hour.o3}
        </span>
      </div>
      <div className={currentTarget ||'pop-up-inactive'}>{isHovering ?  <PopUp   target={currentTarget}
                                                                                 hour={hour} /> : <></>}</div>
    </div>

  );
}

export default AirQuality;