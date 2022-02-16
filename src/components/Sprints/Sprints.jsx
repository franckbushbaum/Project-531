import React, { useState, useEffect } from 'react';
// import './Legs.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import moment from 'moment';
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";
import LineChart from '../LineChart';

function Sprints(){

    const dispatch = useDispatch();

    const allSprints = useSelector(store => store.fetchSprints)
//3 Going to remove sprintsArray 

    // const sprintsArray = allSprints.map((indiv) => {
    //     return { id:indiv.id, mph:indiv.mph}
    // })

    // console.log('sprintsArray:', sprintsArray)

    const [sprintsData, setSprintsData] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Miles per Hour",
            data: allSprints.map((sprint) => sprint.mph),
            pointBackgroundColor: ["#4D4DFF"],
            borderColor:  ["#4D4DFF"],
            color: ["#4D4DFF"],
        }]
    });

    const [sprintsIncline, setSprintsIncline] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Incline",
            data: allSprints.map((sprint) => sprint.incline),
            pointBackgroundColor: ["#FF6700"],
            borderColor:  ["#FF6700"],
            color: ["#FF6700"],
        }]
    });

    useEffect(() => {
        dispatch({ type: 'SEND_SPRINTS'});
    }, []);

    return(
        <>
        <h1>In Sprints</h1>
        <LineChart sprintsData={sprintsData} />
        <LineChart sprintsData={sprintsIncline} />
        </>
    )
} 

export default Sprints;