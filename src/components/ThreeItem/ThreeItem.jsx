import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

function ThreeItem({workout_id, weight_one, weight_two, weight_three, reps_one, reps_two, reps_three}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const changeState = () => {
        console.log(`we're in!`)
    }

    const deleteWorkout = () => {
        console.log(`in DELETE Button`);
        console.log(`what is workout_id..`, workout_id);
        let id = workout_id;
        dispatch({type: 'REMOVE_WORKOUT', payload: id})
    }

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_WORKOUT', payload: workout.workout_id });
    // }, []);

    // const renderWorkout = () => {
    // dispatch({ type: 'FETCH_WORKOUT'});
    // history.push('/four')
    // }

    return(
        <>
        <p>WORKOUT</p>

        <table key={workout_id}>
            <thead>
                <tr>
                    <th>Set</th>
                    <th>Weight</th>
                    <th>Reps</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{weight_one}</td>
                    <td>{reps_one}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{weight_two}</td>
                    <td>{reps_two}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{weight_three}</td>
                    <td>{reps_three}<Button onClick={changeState}><BiEdit size="20px" /></Button></td>
                </tr>
            </tbody>
        </table>
        <Button variant="contained" 
                                size="small" 
                                color="secondary" 
                                style={{ fontSize: 17, borderRadius:"29px"}}  
                                onClick={deleteWorkout}><BsTrashFill color="black" style= {{borderRadius: "50%"}}/></Button>
    </>
    );
}

export default ThreeItem;