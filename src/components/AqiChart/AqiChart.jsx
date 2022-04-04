import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import './AqiChart.css';

function AqiChart({ hours }) {


    // const dispatch = useDispatch();
    // const onSprints = useSelector(store => store.fetchSprints)


    const onData = {
        labels: hours.map((hour) => hour.timestamp_local),
        datasets: [{
            label: "Air Quality Index",
            data: hours.map((hour) => hour.aqi),
            pointBackgroundColor: ["#1FFF0F"],
            borderColor: ["#1FFF0F"],
            color: ["#1FFF0F"],
            hitRadius: 50,
        }]
    };

    console.log('What is hours?', hours)

    return (
        <>
        <h3>In Chart : begins here..</h3>
             <div className="aqi-chart">
                <Line data={onData} />
            </div>       
        </>
    );
}

export default AqiChart;