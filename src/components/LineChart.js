import React from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function LineChart({sprintsData}){

    return(
        <>
        <div><h1>In Line Chart</h1></div>
        <div className="linechart" style={{width: '700px'}}>
            <Bar data={sprintsData} />
        </div>
        </>
    );
}

export default LineChart;