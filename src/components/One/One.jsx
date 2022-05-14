import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AirQuality from '../AirQuality/AirQuality.jsx';
import AqiChart from '../AqiChart/AqiChart.jsx';
import BarChartLabel from '../BarChart/BarChartLabel.jsx';
import './One.css';

function One() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [workoutType, setWorkoutType] = useState([]);
    const [airQualityBox, setAirQualityBox] = useState(true);

    const popUp = {
                pm10: "concentration of particulate matter smaller than 10 microns.",
                pm25:  "concentration of particulate matter smaller than 25 microns.",
                o3: "Trioxygen, the layer of ozone protecting the Earth from harmful rays.",
                no2: "More dangerous than Carbon Dioxide for the environment? 300% more potent.",
                co: "Carbon Monoxide"
    }

    // const data = useSelector(store => store.workoutTypeId.toString().slice(-1));

    const data = useSelector(store => store.workoutTypeId);


//4 Data for Air Quality Component
    const topHour = data?.slice(-1);

    const handleChange = (event) => {
        setAirQualityBox(false)
        setWorkoutType(event.target.value);
        if (event.target.value === 1) {
            history.push('/chest');
        } else if (event.target.value === 2) {
            history.push('/legs');
        } else if (event.target.value === 3) {
            history.push('/shoulders');
        } else if (event.target.value === 4) {
            history.push('/back');
        } else if (event.target.value === '5'){
//5 These are the hardcoded coordinates for White Bear Lake, MN.
            return dispatch ({
                type: 'FETCH_AIR_QUALITY',
                payload: {                          
                          lat: '45.085',
                          lon: '-93.008',
                          user: 'Franck'
                         }
            })
        }
        dispatch({
            type: 'SET_WORKOUT_TYPE_ID',
            payload: event.target.value
        })
    };

    const newData = { ...data, ...popUp}

    console.log('what is NEW data? ', newData)

    const requestThreeDaysData = (event) => {
        // console.log('what is event?', event);
        const hours = event;
        dispatch({
            type: 'FETCH_LONG_AIR_QUALITY',
            payload: {
                      lat: '45.085',
                      lon: '-93.008',
                      user: 'Franck',
                      hours
                     }
        })
    };

    return (
        <>
            <div className="container">
                {/* <h3>{JSON.stringify(data)}</h3> */}
                
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
                    {!airQualityBox && 
                    <Box className="air-quality-box">
                        {topHour.map((hour) => {
                            return (
                                <AirQuality hour={hour}
                                                     />
                            );
                        })}
                        <BarChartLabel hours={data} />
                        <AqiChart hours={data} />
                        <button className='' value={5} onClick={handleChange}>24HR</button>
                        <button className='' onClick={() => requestThreeDaysData('72')}>72HR</button>
                    </Box>}
                    <button className="air-quality-button" value={5} onClick={handleChange}>Your Air Quality Report</button>
                
            </div>

        </>

    );
}

export default One;