import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
// import './AqiChart.css';

function VolumeChart({ volumeArray }) {


    // const dispatch = useDispatch();
    // const onSprints = useSelector(store => store.fetchSprints)

    console.log('in VolumeChart, what is volumeArray here?', volumeArray)

    const onData = {
        labels: volumeArray.map((workout) => workout.id),
        datasets: [{
            label: "VOLUME",
            data: volumeArray.map((workout) => workout.volume),
            pointBackgroundColor: ["#1FFF0F"],
            borderColor: ["#FF5F1F"],
            color: ["#FF5F1F"],
            hitRadius: 50,
        }]
    };

    // console.log('What is hours?', hours.length)

    return (
        <>
        <p>IN VOLUME CHART</p>
            <header>
                <h2 >VOLUMES</h2>
            </header>
             <div className="aqi-chart">
                <Line data={onData} />
            </div>        
        </>
    );
}

export default VolumeChart;