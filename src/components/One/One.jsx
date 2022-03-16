import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AirQuality from '../AirQuality/AirQuality.jsx'
import './One.css';

function One() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [workoutType, setWorkoutType] = useState([]);

    const data = useSelector(store => store.workoutTypeId.slice(-1));

    //2 Put this function inside new component


    const handleChange = (event) => {
        console.log('what is event.target.value testest?', event.target.value)
        setWorkoutType(event.target.value);
        if (event.target.value === 1) {
            console.log('I mean if I do chest..HERE')
            history.push('/chest');
        } else if (event.target.value === 2) {
            history.push('/legs');
        } else if (event.target.value === 3) {
            history.push('/shoulders');
        } else if (event.target.value === 4) {
            history.push('/back');
        } else if (event.target.value === '5'){
        console.log('why doesnt it get here?')
//5 These are the hardcoded coordinates for White Bear Lake, MN.
            return dispatch ({
                type: 'FETCH_AIR_QUALITY',
                payload: {lat: '45.085',
                          lon: '-93.008',
                          user: 'FFRANCK'}
            })
        }
        dispatch({
            type: 'SET_WORKOUT_TYPE_ID',
            payload: event.target.value
        })
    };


    return (
        <>
            <div className="container">
                <h3>{JSON.stringify(data)}</h3>
                <div className="card">
                    <Box className="select-menu" sx={{ minWidth: 100, maxWidth: 400, minHeight: 50, borderRadius: 7, color: 'secondary'  }} >
                        <FormControl sx={{ m: 7, minWidth: 180, borderRadius: 3, backgroundColor: 'gray', color: 'secondary' }}>
                            <InputLabel  color="secondary">Pick a workout</InputLabel>
                            <Select
                                color="secondary"
                                labelId="pick"
                                id="demo-simple-select"
                                value={''}
                                label="workout"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Chest</MenuItem>
                                <MenuItem value={2}>Legs</MenuItem>
                                <MenuItem value={3}>Shoulders</MenuItem>
                                <MenuItem value={4}>Back</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box className="air-quality-box" sx={{minWidth: 100, maxWidth: 400, minHeight: 50, borderRadius: 7, color: 'secondary'}}>
                     <AirQuality props={data} />
                    </Box>

                    <button className="air-quality-button" value={5} onClick={handleChange}>Your Air Quality Report</button>
                </div>
            </div>

        </>

    );
}

export default One;