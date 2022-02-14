import React, { useState, useEffect } from 'react';
import './Legs.css';
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

function Legs() {

    const history = useHistory();
    const dispatch = useDispatch();

    //Data for state.

    const [mph, setMph] = useState('');
    const [incline, setIncline] = useState('');
    const [on, setOn] = useState('');
    const [off, setOff] = useState('');
    const [reps, setReps] = useState('');

    const recentWorkout = useSelector(store => store.recentWorkout);

    const handleClick = (event) => {
        console.log('in handleClick', event.target.className)
        switch (event.target.className) {
            case 'back-button':
                return history.push('/user')
                break;
            case 'new-button':
                history.push('/three')
                break;
        }
    };

    const toArchive = () => {
        history.push('/four');
        dispatch({ type: 'ARCHIVE_INITIATE', payload: 2 })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_BODYPART_WORKOUT', payload: 2 });
    }, []);

    console.log('mph is', mph);
    console.log('incline is', incline)

    return (
        <>
            <div className="container">
                <div className="archive-button">
                    <p className="corner"></p>
                    <button onClick={toArchive} className="archive-child" >Archive    <IoFingerPrintOutline /></button>
                    <div className="move"></div>
                </div>
                <div className="header">
                    <div className="header-title">
                        <h1>Legs</h1>
                    </div>
                </div>
                <div className="last-workout">
                    <p>Last Workout: {moment(recentWorkout.created_at).startOf('day').fromNow()}</p>
                    <span className="sprint-container">
                        <div className="solo-one">
                            MPH<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="select">mph</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="levels"
                                        value={mph}
                                        label="levels"
                                        onChange={(event) => setMph(event.target.value)}
                                    >
                                        <MenuItem value={7}>7 mph</MenuItem>
                                        <MenuItem value={8}>8 mph</MenuItem>
                                        <MenuItem value={9}>9 mph</MenuItem>
                                        <MenuItem value={10}>10 mph</MenuItem>
                                        <MenuItem value={11}>11 mph</MenuItem>
                                        <MenuItem value={12}>12 mph</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-two">
                            INCLINE<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="select">Incline</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="levels"
                                        value={incline}
                                        label="levels"
                                        onChange={(event) => setIncline(event.target.value)}
                                    >
                                        <MenuItem value={8}>8%</MenuItem>
                                        <MenuItem value={9}>9%</MenuItem>
                                        <MenuItem value={10}>10%</MenuItem>
                                        <MenuItem value={11}>11%</MenuItem>
                                        <MenuItem value={12}>12%</MenuItem>
                                        <MenuItem value={13}>13%</MenuItem>
                                        <MenuItem value={14}>14%</MenuItem>
                                        <MenuItem value={15}>15%</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-three">
                            ON<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="select">seconds</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="levels"
                                        value={on}
                                        label="levels"
                                        onChange={(event) => setOn(event.target.value)}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={45}>45</MenuItem>
                                        <MenuItem value={1}>1 min</MenuItem>
                                        <MenuItem value={90}>1.5 min</MenuItem>
                                        <MenuItem value={120}>2 min</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-four">
                            OFF<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="select">seconds</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="levels"
                                        value={off}
                                        label="levels"
                                        onChange={(event) => setOff(event.target.value)}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={45}>45</MenuItem>
                                        <MenuItem value={1}>1 min</MenuItem>
                                        <MenuItem value={90}>1.5 min</MenuItem>
                                        <MenuItem value={120}>2 min</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-five">
                            REPS<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="select">reps</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="levels"
                                        value={reps}
                                        label="levels"
                                        onChange={(event) => setReps(event.target.value)}
                                    >
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </span>
                </div>
                <div className="nav-buttons">
                    <button onClick={handleClick} className="back-button"><CgArrowLeftR text="continue" size={40} />&nbsp;Back</button>
                    <button onClick={handleClick} className="new-button">continue&nbsp;<CgArrowRightR text="continue" size={40} /></button>
                </div>
            </div>
        </>
    );
}

export default Legs;