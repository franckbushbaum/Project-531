import React, { useState, useEffect } from 'react';
import './Sprints.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    stepButtonClasses,
    getListItemSecondaryActionClassesUtilityClass
} from '@mui/material';
import moment from 'moment';
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { CgArrowRightR, CgArrowLeftR, CgDesignmodo } from "react-icons/cg";
import MphChart from './MphChart';
import InclineChart from './InclineChart';
import OnChart from './OnChart';
import OffChart from './OffChart';
import RepsChart from './RepsChart';
import UpdateWindow from './UpdateWindow';
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
    const [mphColor, setMphColor] = useState('screen-button-selected');
    const [inclineColor, setInclineColor] = useState('screen-button');
    const [onColor, setOnColor] = useState('screen-button');
    const [offColor, setOffColor] = useState('screen-button');
    const [repsColor, setRepsColor] = useState('screen-button');
    const [updateColor, setUpdateColor] = useState('screen-button');
    const [updateWindow, setUpdateWindow] = useState(false);
    const [changeSize, setChangeSize] = useState(false);



    const toChart = (destination) => {
        switch (destination) {
            case 'mph':
                setView(1);
                setMphColor('screen-button-selected')
                setInclineColor('screen-button')
                setOnColor('screen-button')
                setOffColor('screen-button')
                setRepsColor('screen-button')
                break;
            case 'incline':
                setInclineColor('screen-button-selected')
                setMphColor('screen-button')
                setOnColor('screen-button')
                setOffColor('screen-button')
                setRepsColor('screen-button')
                // history.push('/incline')
                setView(2);
                break;
            case 'on':
                setView(3);
                setOnColor('screen-button-selected')
                setMphColor('screen-button')
                setInclineColor('screen-button')
                setOffColor('screen-button')
                setRepsColor('screen-button')
                break;
            case 'off':
                setView(4);
                setOffColor('screen-button-selected')
                setMphColor('screen-button')
                setInclineColor('screen-button')
                setOnColor('screen-button')
                setRepsColor('screen-button')
                break;
            case 'reps':
                setView(5);
                setRepsColor('screen-button-selected')
                setMphColor('screen-button')
                setInclineColor('screen-button')
                setOnColor('screen-button')
                setOffColor('screen-button')
                break;
            case 'shrink':

        }
    }


    const showIncline = () => {
        dispatch({ type: 'GET_SINGLE_GRAPH', payload: 'incline' })
    }

    useEffect(() => {
        dispatch({ type: 'GET_SINGLE_GRAPH', payload: 'mph' })
    }, []);

    return (
        <>
            <h1>In Sprints</h1>
            <div className="phone-cover">
                <div className="buttons">
                    <button className={mphColor} onClick={() => toChart('mph')}>MPH</button>
                    <button className={inclineColor} onClick={() => toChart('incline')}>INCLINE</button>
                    <button className={onColor} onClick={() => toChart('on')}>ON</button>
                    <button className={offColor} onClick={() => toChart('off')}>OFF</button>
                    <button className={repsColor} onClick={() => toChart('reps')}>REPS</button>
                </div>
                {!updateWindow ? <div>
                    {view === 1 && <MphChart />}
                    {view === 2 && <InclineChart />}
                    {view === 3 && <OnChart />}
                    {view === 4 && <OffChart />}
                    {view === 5 && <RepsChart />}
                </div> :<>
                    {view === 1 && <MphChart />}
                    {view === 2 && <InclineChart />}
                    {view === 3 && <OnChart />}
                    {view === 4 && <OffChart />}
                    {view === 5 && <RepsChart />}
                    <div/>
                    <div className='small-container'>
                        {updateWindow && <UpdateWindow />}
                    </div></> }
            </div>
            <div className="buttons-bottom">
                <button className={updateColor} onClick={() => setUpdateWindow(!updateWindow)}>Update</button>
            </div>


        </>
    )
}

export default Sprints;