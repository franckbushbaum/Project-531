import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';
import './ThreeItem.css';
import { TiPlusOutline, TiMinusOutline, TiChevronRightOutline } from "react-icons/ti";
import moment from 'moment';

function ThreeItem({ workout_id, weight_one, weight_two, weight_three, reps_one, reps_two, reps_three, created_at, workout_type_id, volume }) {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const [editMode, setEditMode] = useState(true);

    const [repsOne, setRepsOne] = useState(reps_one);
    const [repsTwo, setRepsTwo] = useState(reps_two);
    const [calcReps, setCalcReps] = useState(reps_three);

    const changeState = () => {
        setEditMode(!editMode);
    }

//For the first set.
    const addRepsForFirstSet = () => {
        setRepsOne(repsOne + 1);
    }

    const subtractRepsForFirstSet = () => {
        setRepsOne(repsOne - 1);
    }

//For the second set.
    const addRepsAgain = (y) => {
        console.log('what is reps_two', reps_two)
        setRepsTwo(repsTwo + 1);
    };

    const subtractRepsAgain = () => {
        console.log('what is reps_two', reps_two)
        setRepsTwo(repsTwo - 1);
    };

// For the third set.
    const addReps = (x) => {
        setCalcReps(calcReps + 1);
    };

    const subtractReps = (x) => {
        setCalcReps(calcReps - 1);
    };

    let newVolume = repsOne * weight_one + repsTwo * weight_two + calcReps * weight_three

    console.log('what is new volume?', newVolume)


    const handleUpdate = () => {
        console.log('what is calcReps', calcReps);
        console.log('what is workout_id', workout_id);
        dispatch({
            type: 'EDIT_REPS', 
            payload: {
                'reps_one': repsOne,
                'reps_two': repsTwo,
                'reps_three': calcReps,
                'volume': newVolume,
                'workout_id': workout_id
            }
        });

        Swal.fire({
            title: 'Workout Submitted!',
            icon: 'success',
            confirmButtonText: 'Thanks!',
            background: 'black',
            backdrop: `
                rgba(211,78,78,0.91)
                url("https://c.tenor.com/LoXuYGcyMxgAAAAC/just-do-it-shia-la-beouf.gif")
                center top
                no-repeat
                        `

        });
    }




    // Function that removes workout from database, renders the page without it.
    // Finally, it will send the user back to the first page to restart.  If I have enough time, 
    // I'd like to keep he/she on this page.

    const deleteWorkout = () => {
        console.log(`in DELETE Button`);
        console.log(`what is workout_id..`, workout_id);
        let id = workout_id;

        //Removes workout from the database.
        dispatch({ type: 'REMOVE_WORKOUT', payload: id });

        //Removes workout from the DOM.
        dispatch({ type: 'UNSET_WORKOUT' });
        Swal.fire({
            title: 'Workout Deleted!',
            icon: 'success',
            confirmButtonText: 'Thanks!',
            background: 'black',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://c.tenor.com/LoXuYGcyMxgAAAAC/just-do-it-shia-la-beouf.gif")
                left top
                no-repeat
                        `
        });
        history.push('/user');
    };

    const toArchive = () => {
        history.push('/four');
        dispatch({type: 'ARCHIVE_INITIATE', payload: workout_type_id})
    }

    return (
        <>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="4"><p>{moment(created_at).format('MMM Do YY')}</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Set</th>
                            <th>Weight</th>
                            <th>Reps</th>
                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>{weight_one}</td>
                            <td>{repsOne}</td>
                            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => addRepsForFirstSet()}><TiPlusOutline /></button>
                                <button className="edit-buttons" onClick={() => subtractRepsForFirstSet()}><TiMinusOutline /></button></p>}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{weight_two}</td>
                            <td>{repsTwo}</td>
                            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => addRepsAgain()}><TiPlusOutline /></button>
                                <button className="edit-buttons" onClick={() => subtractRepsAgain()}><TiMinusOutline /></button></p>}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{weight_three}</td>
                            <td>{calcReps}</td>
                            {/* <td>{addToReps}</td> */}
                            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => addReps()}><TiPlusOutline /></button>
                                <button className="edit-buttons" onClick={() => subtractReps()}><TiMinusOutline /></button>
                                <button className="edit-buttons" onClick={handleUpdate}><TiChevronRightOutline /></button></p>}</td>
                        </tr>
                        <tr>
                            <td>
                                <button className="delete-button"
                                    onClick={deleteWorkout}><BsTrashFill /></button>
                            </td>
                            <td colSpan="2"><button className="edit-button" onClick={changeState}><BiEdit /></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={toArchive} className="page-three-archive-button">Archive  <IoFingerPrintOutline /></button>
        </>
    );
}

export default ThreeItem;