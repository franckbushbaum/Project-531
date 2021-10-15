import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { FaHome } from "react-icons/fa";
import ThreeItem from '../ThreeItem/ThreeItem.jsx'


function Three() {

    const history = useHistory();
    const dispatch = useDispatch();
    const workoutTypeId = useSelector(store => store.workoutTypeId);
    const theWorkouts = useSelector(store => store.fetchWorkout);

    const [inputValue, setInputValue] = useState({one_rep_max: '' ,
                                                    week: ''});



    const setValues = (event) => {
        console.log('in setValues', event.target.className);
        switch(event.target.className) {
            case 'MuiInputBase-input MuiOutlinedInput-input':
                setInputValue({...inputValue, one_rep_max: parseInt(event.target.value)})
                break;
         }
    }

    const setValuesToo = (event) => {
        setInputValue({...inputValue, week: event.target.value})

    };

    let objectData; 

    const handleSubmit = () => {
        console.log('in function this is inputValue', inputValue);
        console.log('in function this is inputValue.week', inputValue.week);
        console.log('in function this is inputValue.one_rep_max', inputValue.one_rep_max);
//objectData will be dispatched to index.js, it is the completed workout.
            objectData = {workout_type_id: workoutTypeId,
            one_rep_max: parseInt(inputValue.one_rep_max),
            week: inputValue.week,
            weight_one: '',
            set_one: 1,
            reps_one: '',
            weight_two: '',
            set_two: 2,
            reps_two: '',
            weight_three: '',
            set_three: 3,
            reps_three: '',
        }
           

//This is all the logic done to complete the workout. These values are pushed into objectData before objectData is pushed
//to indexjs. the Template can be found here: http://www.powerliftingtowin.com/wp-content/uploads/2014/05/Original-531-Program.jpg
           if (inputValue.week === 1){
             objectData.weight_one = parseInt(inputValue.one_rep_max * .65);
             objectData.weight_two = parseInt(inputValue.one_rep_max * .75);
             objectData.weight_three = parseInt(inputValue.one_rep_max * .85);
             objectData.reps_one = 5;
             objectData.reps_two = 5;
             objectData.reps_three = 5;
            } else if (inputValue.week === 2){
                objectData.weight_one = parseInt(inputValue.one_rep_max * .7);
                objectData.weight_two = parseInt(inputValue.one_rep_max * .8);
                objectData.weight_three = parseInt(inputValue.one_rep_max * .9);
                objectData.reps_one = 3;
                objectData.reps_two = 3;
                objectData.reps_three = 3; 
            } else if (inputValue.week === 3){
                objectData.weight_one = parseInt(inputValue.one_rep_max * .75);
                objectData.weight_two = parseInt(inputValue.one_rep_max * .85);
                objectData.weight_three = parseInt(inputValue.one_rep_max * .95);
                objectData.reps_one = 5;
                objectData.reps_two = 3;
                objectData.reps_three = 1; 
            };
            
       console.log(objectData)
        dispatch({
                type: 'NEW_WORKOUT',
                payload: objectData
        })

        dispatch({ type: 'FETCH_WORKOUT'})
    }
    const goBack = () => {
        history.push('/chest')
    }

    return (
    <>
        <div className="container-page-three">
            <div className="home-button">
                <div className="the-button">
                <Button variant="contained"
                    size="small"
                    color="secondary"
                    style={{ fontSize: 17, borderRadius: "29px" }}
                    onClick={goBack}><FaHome color="black" style={{ borderRadius: "50%" }} /></Button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    className="input-field"
                    label="Enter One Rep Max"
                    variant="outlined"
                    style={{ backgroundColor: '#dbe3de' }}
                    id="number"
                    required
                    placeholder="One Rep Max"
                    value={inputValue.one_rep_max}
                    onChange={setValues}
                />
                <div className="select-week">
                <Box sx={{ minWidth: 180 }} style={{ backgroundColor: "red" }} >
                    <FormControl sx={{ m: 1, minWidth: 185 }}>
                        <InputLabel style={{ backgroundColor: "black" }}>Select Week</InputLabel>
                        <Select
                            labelId="week"
                            id="week"
                            value={inputValue.week}
                            label="workout"
                            onChange={setValuesToo}
                        >
                            <MenuItem value={1}>Week 1</MenuItem>
                            <MenuItem value={2}>Week 2</MenuItem>
                            <MenuItem value={3}>Week 3</MenuItem>
                            <MenuItem value={4}>UGH</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
            </div>
                <input type='submit' value='Submit' />
            </form>
            
            
        </div>
        <p>{JSON.stringify(workoutTypeId)}</p>
        <p>the workouts: {JSON.stringify(theWorkouts)}</p>
        <div className="display">
        <p>the workouts mapped:{theWorkouts.map(workout => {
            return(<ul>
                    <li>{workout.workout_id}</li>
                    <li>{workout.weight_one}</li>
                    <li>{workout.weight_two}</li>
                    <li>{workout.weight_three}</li>
                    <li>{workout.reps_one}</li>
                    <li>{workout.reps_two}</li>
                    <li>{workout.reps_three}</li>

                    </ul>);   
        })}</p>

        </div>
        <div className="nav-page-three"></div>
    </>
    );
}

export default Three;