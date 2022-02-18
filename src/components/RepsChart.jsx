import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';

function RepsChart() {


    const dispatch = useDispatch();
    const repsSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in reps?', repsSprints)

    const repsData = {
        labels: repsSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Reps",
            data: repsSprints.map((sprint) => sprint.reps),
            pointBackgroundColor: ["#FBFFFF"],
            borderColor: ["#FBFFFF"],
            color: ["#FBFFFF"],
        }]
    };

    useEffect(() => {
     dispatch({type: 'GET_SINGLE_GRAPH', payload: 'reps'})
    }, [])


    return (
        <>
            <div className="sprints-container">
                <div className="mph-chart" style={{ width: '900px' }}>
                     <Line data={repsData} /> 
                </div>
            </div>
        </>
    );
}

export default RepsChart;