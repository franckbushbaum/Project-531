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
            pointBackgroundColor: [hours.length < 50 ? "#1FFF0F" : "#FF5F1F" ],
            borderColor: [hours.length < 50 ? "#1FFF0F" : "#FF5F1F"],
            color: [hours.length < 50 ? "#1FFF0F" : "#FF5F1F"],
            hitRadius: 50,
        }]
    };

    // console.log('What is hours?', hours.length)

    return (
        <>
            <header>
                <h2 className={hours.length < 50 ? 'green' : 'orange'}>{hours.length} CHART</h2>
            </header>
             <div className="aqi-chart">
                <Line data={onData} />
            </div>       
        </>
    );
}

export default AqiChart;