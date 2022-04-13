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



    const onData = {
        labels: hours.map((hour, _index) => _index),
        datasets: [{
            label: "AQI Every Hour",
            data: hours.map((hour) => hour.aqi),
            backgroundColor: [hours.length < 50 ? "#1FFF0F" : "#FFF01F" ],
            borderColor: [hours.length < 50 ? "#1FFF0F" : "#FFF01F"],
            color: [hours.aqi < 50 ? "#1FFF0F" : "#FFF01F"],
            hitRadius: 50,
        }]
    };

   const options = {
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 2,
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

    return (
        <>
             <div className="bar-chart" style={{ height: "9em", width: "92%"}}>
                <Bar options={options} data={onData} width={100}
      height={19} />
            </div>       
        </>
    );
}

export default BarChartLabel;