import React from 'react';
import './AirQuality.css';


function AirQuality({data}) {

console.log('destructured data?', data);



  return (
    <>
    <div className="no">
      <div>
        <p>TODAY'S AIR QUALITY REPORT</p>
        <ul>
          {data.map((hour) => {
            console.log('what is hour?', hour)
            console.log('what is hour.aqi', hour.aqi)
            return <span>On {hour.timestamp_local} we had: <div>{hour.aqi}</div> </span>
          })}
        </ul>
      </div>
    </div> 

  </>
  );
}

export default AirQuality;