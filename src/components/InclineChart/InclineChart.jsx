import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useDispatch, useSelector } from 'react-redux';

function InclineChart() {


    const dispatch = useDispatch();
    const inclineSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in Incline?', inclineSprints)

   let inclineData = {
        labels: inclineSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Incline",
            data: inclineSprints.map((sprint) => sprint.incline),
            pointBackgroundColor: ["#FFF"],
            borderColor: ["#4D4DFF"],
            color: ["#4D4DFF"],
            tension: 0.4,
            hitRadius: 50,
        }]
    };

    useEffect(() => {
     dispatch({type: 'GET_SINGLE_GRAPH', payload: 'incline'})
    }, [])
    return (
        <>
        {/* {JSON.stringify(inclineData)} */}
        <div className="mph-chart">
                <Line data={inclineData} />
            </div>
        </>
    );
}

export default InclineChart;