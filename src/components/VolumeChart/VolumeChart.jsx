import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';
import './VolumeChart.css';

function VolumeChart({ volumeArray }) {

    const onData = {
        labels: volumeArray.slice(0).reverse().map((workout) => workout.id),
        datasets: [{
            label: "LBS",
            data: volumeArray.slice(0).reverse().map((workout) => workout.volume),
            pointBackgroundColor: ["#1FFF0F"],
            borderColor: ["#FF5F1F"],
            color: ["#FF5F1F"],
            hitRadius: 50,
        }]
    };

    return (
        <>
            <div className="volume-banner">
                <header>
                    <h1>TOTAL VOLUME PER WORKOUT</h1>
                </header>
                <div className="volume-chart">
                    <Line data={onData} />
                </div>
            </div>
        </>
    );
}

export default VolumeChart;