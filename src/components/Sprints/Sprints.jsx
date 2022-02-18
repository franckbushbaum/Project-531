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
import MphChart from '../MphChart';
import InclineChart from '../InclineChart';
import OnChart from '../OnChart';
import OffChart from '../OffChart';
import RepsChart from  '../RepsChart';
import { BiStreetView } from 'react-icons/bi';

function Sprints() {

    const dispatch = useDispatch();
    const history = useHistory();

    const mphSprints = useSelector(store => store.fetchSprints)

    console.log('what is all sprints in sprints?', mphSprints)

    const [mphData, setMphData] = useState({
        labels: mphSprints.map((sprint) => sprint.id),
        datasets: [{
            label: "Miles per Hour",
            data: mphSprints.map((sprint) => sprint.mph),
            pointBackgroundColor: ["#F72119"],
            borderColor: ["#F72119"],
            color: ["#F72119"],
        }]
    });

    const [view, setView] = useState(1)


    const toChart = (destination) => {
        console.log('what is destination?', destination)
        switch (destination){
            case 'mph':
                setView(1);
                break;
            case 'incline':
                console.log('in incline')
                // history.push('/incline')
                setView(2);
                break;
            case 'on':
                setView(3);
                break;
            case 'off':
                setView(4);
                break;
            case 'reps':
                setView(5);
                break;
        }
    }

    const showIncline = () => {
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'incline'})
    }

    useEffect(() => {
        dispatch({type: 'GET_SINGLE_GRAPH', payload: 'mph'})
    }, []);

    return (
        <>
            <h1>In Sprints</h1>
            <div className="phone-cover">
                <div className="buttons">
                    <button className="screen-button" onClick={() => toChart('mph')}>MPH</button>
                    <button className="screen-button" onClick={() => toChart('incline')}>INCLINE</button>
                    <button className="screen-button" onClick={() => toChart('on')}>ON</button>
                    <button className="screen-button" onClick={() => toChart('off')}>OFF</button>
                    <button className="screen-button" onClick={() => toChart('reps')}>REPS</button>
                </div>
                {view === 1 && <MphChart />}
                {view === 2 && <InclineChart />}
                {view === 3 && <OnChart />}
                {view === 4 && <OffChart />}
                {view === 5 && <RepsChart />}
            </div>

        </>
    )
}

export default Sprints;