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
            data: allSprints.map((sprint) => sprint.mph)
        }]
    });

    useEffect(() => {
        dispatch({ type: 'SEND_SPRINTS'});
    }, []);

    return(
        <>
        <><div>In sprints</div>
        <div>{JSON.stringify(allSprints)}</div></>
        <div>{allSprints.map(sprint => {
            return(
            <div><h5>{sprint.mph}</h5></div>)
        })}</div>
        <LineChart sprintsData={sprintsData} />
        </>

    )
} 

export default Sprints;