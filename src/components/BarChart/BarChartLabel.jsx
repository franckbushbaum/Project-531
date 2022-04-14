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

    const [color, setColor] = useState([]);
    const [barAqi, setBarAqi] = useState([]);

    const barAqis = hours.map((hour) => hour.aqi);

//4 Spread Operator??
    const colorArray = () => {
      let sumArray = [];
      barAqis.forEach((aqi) => {
        if(0 < aqi && aqi < 20){
          sumArray.push('#ff8b26')
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



    const onData = {
        labels: hours.map((hour, _index) => _index + 1),
        datasets: [{
            label: "AQI Every Hour",
            data: hours.map((hour) => hour.aqi),
            backgroundColor: color,
            borderColor: [hours.length < 50 ? "#1FFF0F" : "#FFF01F"],
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
            text: 'Chart.js Horizontal Bar Chart',
            fontSize: 15,
          },
        },
      };

    // console.log('What is hours?', hours.length)

    useEffect(() => {
        colorArray(); 
    }, [hours])

    return (
        <>
             <div className="bar-chart" style={{ height: "9em", width: "92%"}}>
                <Bar options={options} data={onData} width={100}
      height={18} />
            </div>       
        </>
    );
}

export default BarChartLabel;