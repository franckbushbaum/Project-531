import React, { useState, useEffect } from 'react';
import './Four.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import ImageSlider from '../ImageSlider/ImageSlider';

function Four() {

    const history = useHistory();
    const dispatch = useDispatch();

    const archivedWorkouts = useSelector(store => store.archiveStorage);
    const length = useSelector(store => {
        return store.archiveStorage.length
    })
    const [ first ] = useSelector(store => store.archiveStorage.slice(0, store.archiveStorage.length-1))

    // useEffect(() => {
    //     dispatch({type: 'ARCHIVE_INITIATE', payload: archivedWorkouts[0].workout_type_id})
    //  }, []);

    return (
        <div className="four-container">
            <div className="archive-header">
                    <h1>ARCHIVE</h1>
            </div>
            <div className="workouts-container">
                hi yes i am here
          <ImageSlider slides={archivedWorkouts}                       
                       length={length}
                       first={first}/> 
            </div>            
        </div>
    );
}

export default Four;