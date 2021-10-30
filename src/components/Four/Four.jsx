import React, { useState, useEffect } from 'react';
import './Four.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";

function Four() {

    const history = useHistory();
    const dispatch = useDispatch();

    const archivedWorkouts = useSelector(store => store.archiveStorage);

    const removeFromArchive = (id, workout_type_id) => {
        // console.log('in remove from archive..');
        // console.log('whut is id..', id);
        // console.log('whut is workout_type..', workout_type_id);
        dispatch({ type: 'REMOVE_WORKOUT', payload: id });
        dispatch({type: 'ARCHIVE_INITIATE', payload: workout_type_id});

        Swal.fire({
            title: 'TJFP!',
            icon: 'success',
            confirmButtonText: 'Cool',
            background: 'black',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://c.tenor.com/pK1P6r1kCV4AAAAC/the-dude.gif")
                left top
                no-repeat
                        `
        });
    };

    // useEffect(() => {
    //     dispatch({type: 'ARCHIVE_INITIATE', payload: workout.workout_type_id})
    // }, []);

    return (
        <>
            <div className="archive-header">
                <div className="archive-header-title">
                    <h1>ARCHIVE</h1>
                </div>
            </div>

            {archivedWorkouts.map((workout) => {
                return (
                    <div className="individual-table-container">
                        <div className="individual-table">
                            {/* <p>{JSON.stringify(workout.workout_id)}</p> */}
                            <table key={workout.workout_id} className="page-four-table">
                                <thead>
                                    <tr>
                                        <th colSpan="4"><p>{moment(workout.created_at).format('MMM Do YY')}</p></th>
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
                                        <td>{workout.weight_one}</td>
                                        <td>{workout.reps_one}</td>
                                        {/* <td>{ editMode ? <p></p> : <p>+</p>}</td> */}
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>{workout.weight_two}</td>
                                        <td>{workout.reps_two}</td>
                                        {/* <td>{ editMode ? <p></p> : <p>+</p>}</td> */}
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>{workout.weight_three}</td>
                                        <td>{workout.reps_three}</td>
                                        {/* <td>{addToReps}</td> */}
                                        {/* <td>{editMode ? <p></p> : <p><button onClick={() => addReps()}>+</button>
                                <button onClick={() => subtractReps()}>-</button>
                                <button onClick={handleUpdate}>Submit</button></p>}</td> */}
                                    </tr>
                                </tbody>
                            </table>
                            <button className="fresh" onClick={() => removeFromArchive(workout.workout_id, workout.workout_type_id)}><BsTrashFill /></button>
                        </div>
                    </div>)
            })}


        </>
    );
}

export default Four;