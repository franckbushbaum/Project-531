import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';

function OnChart() {


    const dispatch = useDispatch();
    const onSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in On?', onSprints)

    const onData = {
        labels: onSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Duration",
            data: onSprints.map((sprint) => sprint.on),
            pointBackgroundColor: ["#1FFF0F"],
            borderColor: ["#1FFF0F"],
            color: ["#1FFF0F"],
            hitRadius: 50,
        }]
    };

    useEffect(() => {
     dispatch({type: 'GET_SINGLE_GRAPH', payload: 'on'})
    }, [])
    return (
        <>
            <div className="sprints-container">
                <div className="mph-chart" >
                     <Line data={onData} /> 
                </div>
            </div>
        </>
    );
}

export default OnChart;