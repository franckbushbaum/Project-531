import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function One() {
    const  history = useHistory();

    const [ workoutType, setWorkoutType] = useState('');

    const handleChange = (event) => {
        setWorkoutType(event.target.value);
        console.log('workoutType value is ', workoutType);
        if(event.target.value === 'chest'){
            history.push('/chest');
        } else if (event.target.value === 'legs'){
            history.push('/legs');
        }
      };

    return (
        <>
            <p>Under Construction...</p>
            <div className="select-menu">
            <Box sx={{ minWidth: 150 }} style={{ backgroundColor:"red"}} >
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel style={{ backgroundColor:"black"}} id="pick">Pick a workout</InputLabel>
                    <Select
                        labelId="pick"
                        id="demo-simple-select"
                        value={workoutType}
                        label="workout"
                        onChange={handleChange}
                    >
                        <MenuItem value="chest">Chest</MenuItem>
                        <MenuItem value="legs">Legs</MenuItem>
                        <MenuItem value="shoulders">Shoulders</MenuItem>
                        <MenuItem value="back">Back</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>
        </>

    );
}

export default One;