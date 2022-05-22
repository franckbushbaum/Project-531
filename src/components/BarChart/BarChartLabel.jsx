import React, { useState, useEffect } from 'react';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import './BarChart.css';

function BarChartLabel({ hours }) {


    // const dispatch = useDispatch();
    // const onSprints = useSelector(store => store.fetchSprints)

    const [color, setColor] = useState();
    const [barAqi, setBarAqi] = useState([]);

  const barAqis = hours.map((hour) => hour.aqi);


//4 My first attempt at colorArray was a switch statement.  It wasn't working for some reason
//4  I'm going to leave this like it is for now.

  const colorArray = () => {
    let sumArray = [];
      barAqis.forEach((aqi) => {
        if(0 < aqi && aqi < 20){
          sumArray.push('#26e6ff')
        } else if (20 <= aqi && aqi < 30){
          sumArray.push('#ffe600')
        } else if (30 <= aqi && aqi < 40){
          sumArray.push('rgb(34, 255, 0)')
        } else if (40 <= aqi && aqi < 50){
          sumArray.push('rgb(216, 226, 28)')
        } else if (50 <= aqi && aqi < 60){
          sumArray.push('rgb(66, 120, 181)')
        } else if (60 <= aqi && aqi < 70){
          sumArray.push('rgb(111, 0, 255)')
        } else if (70 <= aqi && aqi < 80){
          sumArray.push('rgb(0, 38, 255)')
        } else if (80 <= aqi && aqi < 90){
          sumArray.push('rgb(204, 0, 255)')
        } else if (90 <= aqi && aqi < 100){
          sumArray.push('rgb(255, 0, 162)')
        }
        setColor(sumArray)
      })
    }

    // const colorArray = () => {
    //   barAqis.forEach((aqi) => {
    //     if(0 < aqi && aqi < 20){
    //       setColor([...color, '#ff8b26'])
    //     } else if (20 <= aqi && aqi < 30){
    //       setColor([...color, '#ffe600'])
    //     } else if (30 <= aqi && aqi < 40){
    //       setColor([...color, 'rgb(34, 255, 0)'])
    //     } else if (40 <= aqi && aqi < 50){
    //       setColor([...color, 'rgb(216, 226, 28)'])
    //     } else if (50 <= aqi && aqi < 60){
    //       setColor([...color, 'rgb(66, 120, 181)'])
    //     } else if (60 <= aqi && aqi < 70){
    //       setColor([...color, 'rgb(111, 0, 255)'])
    //     } else if (70 <= aqi && aqi < 80){
    //       setColor([...color, 'rgb(0, 38, 255)'])
    //     } else if (80 <= aqi && aqi < 90){
    //       setColor([...color, 'rgb(204, 0, 255)'])
    //     } else if (90 <= aqi && aqi < 100){
    //       setColor([...color, 'rgb(255, 0, 162)'])
    //     }
    //   })
    // }

    // const colorArray = () => {
    //   barAqis.forEach((aqi) => {
    //     if(0 < aqi && aqi < 20){
    //       setColor(['#ff8b26', ...color])
    //     } else if (20 <= aqi && aqi < 30){
    //       setColor(['#ffe600', ...color])
    //     } else if (30 <= aqi && aqi < 40){
    //       setColor(['rgb(34, 255, 0)', ...color])
    //     } else if (40 <= aqi && aqi < 50){
    //       setColor(['rgb(216, 226, 28)', ...color])
    //     } else if (50 <= aqi && aqi < 60){
    //       setColor(['rgb(66, 120, 181)', ...color])
    //     } else if (60 <= aqi && aqi < 70){
    //       setColor(['rgb(111, 0, 255)', ...color])
    //     } else if (70 <= aqi && aqi < 80){
    //       setColor(['rgb(0, 38, 255)', ...color])
    //     } else if (80 <= aqi && aqi < 90){
    //       setColor(['rgb(204, 0, 255)', ...color])
    //     } else if (90 <= aqi && aqi < 100){
    //       setColor(['rgb(255, 0, 162)', ...color])
    //     }
    //   })
    // }



    const onData = {
        labels: hours.map((hour, _index) => _index + 1),
        datasets: [{
            label: "AQI Every Hour",
            data: hours.map((hour) => hour.aqi),
            backgroundColor: color,
            borderColor: "black",
            color: color,
            borderWidth: 2,
        }]
    };

   const options = {
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 3,
            borderRadius: 500,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'AQI',
            fontSize: 15,
          },
        },
      };

    useEffect(() => {
        colorArray(); 
    }, [hours])

    return (
        <>
             <div className="bar-chart" style={{ height: "17", width: "90%"}}>
                <Bar options={options} data={onData} width={100} height={18} />
            </div>       
        </>
    );
}

export default BarChartLabel;