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

    const [mph, setMph] = useState(null);
    const [incline, setIncline] = useState(null);
    const [on, setOn] = useState(null);
    const [off, setOff] = useState(null);
    const [reps, setReps] = useState(null);

    console.log(`mph:`, mph, `incline:`, incline, `on:`, on, `off:`,off,`reps:`, reps)

    const recentWorkout = useSelector(store => store.recentWorkout);
    const allSprints = useSelector(store => store.fetchSprints)

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

    const sendValues = () => {
        dispatch({ type: 'SEND_SPRINT', payload: {
            mph: mph,
            incline: incline,
            on: on,
            off: off,
            reps: reps
        }})
        setMph(null);
        setIncline(null);
        setOn(null);
        setOff(null)
        setReps(null)
        
    }

    const toArchive = () => {
        history.push('/four');
        dispatch({ type: 'ARCHIVE_INITIATE', payload: 2 })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_BODYPART_WORKOUT', payload: 2 });
    }, []);

    console.log('look its here:', JSON.stringify(allSprints))
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
                <div className="last-workout-legs">
                    <p>Last Workout: {moment(recentWorkout.created_at).startOf('day').fromNow()}</p>
                    <span className="sprint-container">
                        <div className="solo-one">
                            MPH<br />
                            <Box sx={{ fontFamily: 'JetBrains Mono', color: 'rgba(211, 78, 78, 0.781)', minWidth: 120, backgroundColor: "transparent", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} id="select">mph</InputLabel>
                                    <Select
                                        style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}}
                                        labelId="select"
                                        id="levels"
                                        value={mph}
                                        label="levels"
                                        onChange={(event) => setMph(event.target.value)}
                                    >
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={7}>7 mph</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={8}>8 mph</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={9}>9 mph</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={10}>10 mph</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={11}>11 mph</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={12}>12 mph</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-two">
                            INCLINE<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "transparent", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} id="select">Incline</InputLabel>
                                    <Select
                                        style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}}
                                        labelId="select"
                                        id="levels"
                                        value={incline}
                                        label="levels"
                                        onChange={(event) => setIncline(event.target.value)}
                                    >
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={8}>8%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={9}>9%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={10}>10%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={11}>11%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={12}>12%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={13}>13%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={14}>14%</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={15}>15%</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-three">
                            ON<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "transparent", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} id="select">seconds</InputLabel>
                                    <Select
                                        style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}}
                                        labelId="select"
                                        id="levels"
                                        value={on}
                                        label="levels"
                                        onChange={(event) => setOn(event.target.value)}
                                    >
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={10}>10</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={20}>20</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={30}>30</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={45}>45</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={60}>1 min</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={90}>1.5 min</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={120}>2 min</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-four">
                            OFF<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "transparent", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} id="select">seconds</InputLabel>
                                    <Select
                                        style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}}
                                        labelId="select"
                                        id="levels"
                                        value={off}
                                        label="levels"
                                        onChange={(event) => setOff(event.target.value)}
                                    >
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={10}>10</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={20}>20</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={30}>30</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={45}>45</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={60}>1 min</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={90}>1.5 min</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={120}>2 min</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="solo-five">
                            REPS<br />
                            <Box sx={{ minWidth: 120, backgroundColor: "transparent", borderRadius: 3, padding: .3 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} id="select">reps</InputLabel>
                                    <Select
                                        style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}}
                                        labelId="select"
                                        id="levels"
                                        value={reps}
                                        label="levels"
                                        onChange={(event) => setReps(event.target.value)}
                                    >
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={3}>3</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={4}>4</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={5}>5</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={6}>6</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={7}>7</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={8}>8</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={9}>9</MenuItem>
                                        <MenuItem style={{fontFamily: 'JetBrains Mono',color: 'rgba(211, 78, 78, 0.781)'}} value={10}>10</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </span>
                    <div className="sending-data-window">
                        <div className="window-response">
                            {mph === null ? <div>this</div> : <div> {mph} mph</div>}
                            {incline === null ? <div>this</div> : <div> {incline} %</div>}
                            {on === null ? <div>this</div> : <div> {on} seconds duration</div>}
                            {off === null ? <div>this</div> : <div> {off} seconds break</div>}
                            {reps === null ? <div>this</div> : <div> {reps} times</div>}
                        </div>
                        <div className="confirm-button">
                            {reps === null ? <div></div> : <button onClick={()=> sendValues()}>Confirm</button>}
                        </div>
                    </div>
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