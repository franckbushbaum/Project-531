import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';

function OffChart() {


    const dispatch = useDispatch();
    const offSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in off?', offSprints)

    const offData = {
        labels: offSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "BREAKTIME TIME",
            data: offSprints.map((sprint) => sprint.off),
            pointBackgroundColor: ["#FF7B19"],
            borderColor: ["#FF7B19"],
            color: ["#FF7B19"],
            hitRadius: 50,
        }]
    };

    useEffect(() => {
        dispatch({ type: 'GET_SINGLE_GRAPH', payload: 'off' })
    }, [])
    return (
        <>
            <div className="mph-chart">
                <Line data={offData} />
            </div>
        </>
    );
}

export default OffChart;