import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './One.css';

function One() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [workoutType, setWorkoutType] = useState([]);

    const handleChange = (event) => {
        setWorkoutType(event.target.value);
        if (event.target.value === 1) {
            history.push('/chest');
        } else if (event.target.value === 2) {
            history.push('/legs');
        } else if (event.target.value === 3) {
            history.push('/shoulders');
        } else if (event.target.value === 4) {
            history.push('/back');
        }
        // To one.reducer.js.
        dispatch({
            type: 'SET_WORKOUT_TYPE_ID',
            payload: event.target.value
        })
    };

    return (
        <>
            
            <div className="card">
                    <Box className="select-menu" sx={{ minWidth: 100, maxWidth: 300, minHeight:300, borderRadius: 7, }} style={{ backgroundColor: "#000000d0" }} >
                        <FormControl sx={{ m: 10, minWidth: 150 }}>
                            <InputLabel style={{ backgroundColor: "black" }} id="pick">Pick a workout</InputLabel>
                            <Select
                                style={{backgroundColor:"violet"}}
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
            </div>
            
        </>

    );
}

export default One;