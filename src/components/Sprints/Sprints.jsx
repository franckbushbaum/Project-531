import React, { useState, useEffect } from 'react';
import './Sprints.css';
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

function Sprints() {

    const dispatch = useDispatch();

    const allSprints = useSelector(store => store.fetchSprints)

    const [props, setProps] = useState(1)

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
            borderColor: ["#4D4DFF"],
            color: ["#4D4DFF"],
        }]
    });

    const [sprintsIncline, setSprintsIncline] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Incline",
            data: allSprints.map((sprint) => sprint.incline),
            pointBackgroundColor: ["#FF6700"],
            borderColor: ["#FF6700"],
            color: ["#FF6700"],
        }]
    });

    const [sprintsDuration, setSprintsDuration] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Duration",
            data: allSprints.map((sprint) => sprint.on),
            pointBackgroundColor: ["#FFF01F"],
            borderColor: ["#FFF01F"],
            color: ["#FFF01F"],
        }]
    });

    const [sprintsBreak, setBreakDuration] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Duration",
            data: allSprints.map((sprint) => sprint.off),
            pointBackgroundColor: ["#F72119"],
            borderColor: ["#F72119"],
            color: ["#F72119"],
        }]
    });

    const [sprintsReps, setRepsDuration] = useState({
        labels: allSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Duration",
            data: allSprints.map((sprint) => sprint.reps),
            pointBackgroundColor: ["#39FF14"],
            borderColor: ["#39FF14"],
            color: ["#39FF14"],
        }]
    });

    const showMph = () => {
        setProps(1)
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'mph'})
    }

    const showIncline = () => {
        setProps(2)
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'incline'})
    }

    const showDuration = () => {
        setProps(3)
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'on'})
    }

    const showBreak = () => {
        setProps(4)
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'off'})
    }

    const showReps = () => {
        setProps(5)
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'reps'})
    }


    useEffect(() => {
        dispatch({ type: 'SEND_SPRINTS' });
    }, []);

    return (
        <>
            <h1>In Sprints</h1>
            <div className="phone-cover">
                <div className="buttons">
                    <button className="screen-button" onClick={() => showMph()}>MPH</button>
                    <button className="screen-button" onClick={() => showIncline()}>Incline</button>
                    <button className="screen-button" onClick={() => showDuration()}>Duration</button>
                    <button className="screen-button" onClick={() => showBreak()}>Rest</button>
                    <button className="screen-button" onClick={() => showReps()}>Reps</button>
                </div>
                {props == 1 ? <LineChart sprintsData={sprintsData} /> : <div></div>}
                {props == 2 ? <LineChart sprintsData={sprintsIncline} /> : <div></div>}
                {props == 3 ? <LineChart sprintsData={sprintsDuration} /> : <div></div>}
                {props == 4 ? <LineChart sprintsData={sprintsBreak} /> : <div></div>}
                {props == 5 ? <LineChart sprintsData={sprintsReps} /> : <div></div>}
            </div>

        </>
    )
}

export default Sprints;