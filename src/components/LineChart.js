import React from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart({ sprintsData }) {

    return (
        <>
            <div><h1>In Line Chart</h1></div>
            <div className="sprints-container">
                <div className="linechart" style={{ width: '900px' }}>
                    <Line data={sprintsData} />
                </div>
            </div>
        </>
    );
}

export default LineChart;