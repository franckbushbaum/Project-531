import React, { useState, useEffect } from 'react';
import './Four.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import ImageSlider from '../ImageSlider/ImageSlider';
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
        dispatch({ type: 'ARCHIVE_INITIATE', payload: workout_type_id});

        // Swal.fire({
        //     title: 'Workout Deleted!',
        //     icon: 'success',
        //     confirmButtonText: 'Cool',
        //     background: 'black',
        //     backdrop: `
        //         rgba(0,0,123,0.4)
        //         url("https://c.tenor.com/pK1P6r1kCV4AAAAC/the-dude.gif")
        //         left top
        //         no-repeat
        //                 `
        // });
    };

    // useEffect(() => {
    //     dispatch({type: 'ARCHIVE_INITIATE', payload: workout.workout_type_id})
    // }, []);


    console.log('What are archived workouts?', archivedWorkouts)

    return (
        <div className="four-container">
            <div className="archive-header">
                    <h1>ARCHIVE</h1>
            </div>
            <div className="workouts-container">
                hi yes i am here
          <ImageSlider slides={archivedWorkouts}                       
                       /> 
            </div>            
        </div>
    );
}

export default Four;