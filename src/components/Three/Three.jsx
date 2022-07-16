import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
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
import './Three.css';
import Swal from 'sweetalert2';


function Three() {

    const history = useHistory();
    const dispatch = useDispatch();
    const workoutTypeId = useSelector(store => {
        if (store.workoutTypeId.length < 0) {
            return 1
        }
        return store.workoutTypeId
    });
    const theWorkouts = useSelector(store => store.fetchWorkout);

    const [inputValue, setInputValue] = useState({ one_rep_max: '', week: '' });

    const [updateButton, setUpdateButton] = useState(true);

    // const button = document.querySelector("button.testing")

    // button.addEventListener("click", e => {
    //     console.log(e);
    // })


    //Set first value. Switch statement in case we want to combine setValues and setValuesToo at a later time.
    const setValues = (event) => {
        console.log('in setValues', event.target.className);
        switch (event.target.className) {
            case 'MuiInputBase-input MuiOutlinedInput-input':
                setInputValue({ ...inputValue, one_rep_max: parseInt(event.target.value) })
                break;
        }
    }
    //Set second value.
    const setValuesToo = (event) => {
        setInputValue({ ...inputValue, week: event.target.value });

    };

    let objectData;


    const handleSubmit = () => {
        console.log('in function this is inputValue', inputValue);
        console.log('in function this is inputValue.week', inputValue.week);
        console.log('in function this is inputValue.one_rep_max', inputValue.one_rep_max);
        objectData = {
            workout_type_id: workoutTypeId,
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
            volume: '',
        }


        //This is all the logic done to complete the workout. These values are pushed into objectData before objectData is pushed
        //to indexjs. the Template can be found here: http://www.powerliftingtowin.com/wp-content/uploads/2014/05/Original-531-Program.jpg
        if (inputValue.week === 1) {
            objectData.weight_one = parseInt(inputValue.one_rep_max * .65);
            objectData.weight_two = parseInt(inputValue.one_rep_max * .75);
            objectData.weight_three = parseInt(inputValue.one_rep_max * .85);
            objectData.reps_one = 5;
            objectData.reps_two = 5;
            objectData.reps_three = 5;
            objectData.volume = parseInt(inputValue.one_rep_max * .65) * 5 + parseInt(inputValue.one_rep_max * .75) * 5 + parseInt(inputValue.one_rep_max * .85) * 5
        } else if (inputValue.week === 2) {
            objectData.weight_one = parseInt(inputValue.one_rep_max * .7);
            objectData.weight_two = parseInt(inputValue.one_rep_max * .8);
            objectData.weight_three = parseInt(inputValue.one_rep_max * .9);
            objectData.reps_one = 3;
            objectData.reps_two = 3;
            objectData.reps_three = 3;
            objectData.volume = parseInt(inputValue.one_rep_max * .7) * 3 + parseInt(inputValue.one_rep_max * .8) * 3 + parseInt(inputValue.one_rep_max * .9) * 3
        } else if (inputValue.week === 3) {
            objectData.weight_one = parseInt(inputValue.one_rep_max * .75);
            objectData.weight_two = parseInt(inputValue.one_rep_max * .85);
            objectData.weight_three = parseInt(inputValue.one_rep_max * .95);
            objectData.reps_one = 5;
            objectData.reps_two = 3;
            objectData.reps_three = 1;
            objectData.volume = parseInt(inputValue.one_rep_max * .75) * 5 + parseInt(inputValue.one_rep_max * .85) * 3 + parseInt(inputValue.one_rep_max * .95) * 1
        };

        Swal.fire({
            title: 'Workout Added!',
            icon: 'success',
            confirmButtonText: 'OK',
            background: 'rgba(211,78,78,0.781)',
            backdrop: `
                rgba(0, 0, 0, 0.5);
                url("https://c.tenor.com/LoXuYGcyMxgAAAAC/just-do-it-shia-la-beouf.gif")
                center right
                no-repeat
                        `
        });


        //Dispatch to POST data to database, wait 3 seconds, GET workout from database.           
        dispatch({
            type: 'NEW_WORKOUT',
            payload: objectData
        }); setTimeout(() => {
            dispatch({ type: 'FETCH_WORKOUT' })
        }, 1000);
        //Clear input field.
        setInputValue({ ...inputValue, one_rep_max: '', week: '' });
    }

    const goBack = () => {
        history.push('/user')
        dispatch({ type: 'UNSET_WORKOUT' })
    }

    useEffect(() => {
        dispatch({ type: 'UNSET_WORKOUT' });
    }, []);

    return (
        <>
            {/* { updateButton ? <p></p> : <button>Edit</button>}
        <button className="testing">test button</button> */}
            <div className="page-three-actual">
                <button className="the-button" onClick={goBack}><FaHome size="40px" /></button>
                <div className="container-page-three">
                    <form className="container-forms" onSubmit={handleSubmit}>
                        <TextField style={{ m: 5, backgroundColor: 'gray', color: 'black', width: '40%', margin: '0 0 2rem 31%'}}
                            className="input-field"
                            label="Enter One Rep Max"
                            variant="outlined"
                            id="number"
                            required
                            placeholder="One Rep Max"
                            value={inputValue.one_rep_max}
                            onChange={setValues}
                        />
                        <div className="select-week">
                                <FormControl style={{ m: 5, backgroundColor: 'gray', color: 'black', width: '40%', borderRadius: '15px', margin: '0 0 2rem 31%' }}>
                                    <InputLabel >Select Week</InputLabel>
                                    <Select
                                        label="Select Week"
                                        placeholder="Select Week"
                                        id="week"
                                        value={inputValue.week}
                                        label="workout"
                                        onChange={setValuesToo}
                                    >
                                        <MenuItem value={1}>Week 1</MenuItem>
                                        <MenuItem value={2}>Week 2</MenuItem>
                                        <MenuItem value={3}>Week 3</MenuItem>
                                        <MenuItem value={4}>Deload</MenuItem>
                                    </Select>
                                </FormControl>                     
                        <input className="submit-form-button" type='submit' value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
            <p>{JSON.stringify(workoutTypeId)}</p>
            <p>{JSON.stringify(theWorkouts.created_at)}</p>
            <div className="display">
                {theWorkouts.map(workout => {
                    return (<ThreeItem workout_id={workout.workout_id}
                        created_at={workout.created_at}
                        weight_one={workout.weight_one}
                        weight_two={workout.weight_two}
                        weight_three={workout.weight_three}
                        reps_one={workout.reps_one}
                        reps_two={workout.reps_two}
                        reps_three={workout.reps_three}
                        workout_type_id={workout.workout_type_id}
                        volume={workout.volume}
                    />);
                })}
            </div>
            <div className="nav-page-three"></div>
        </>
    );
}

export default Three;