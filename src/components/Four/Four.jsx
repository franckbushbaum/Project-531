import React, { useState, useEffect } from 'react';
import './Four.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import ImageSlider from '../ImageSlider/ImageSlider';
import VolumeChart from '../VolumeChart/VolumeChart';

function Four() {

    const history = useHistory();
    const dispatch = useDispatch();

    const archivedWorkouts = useSelector(store => store.archiveStorage);
    const length = useSelector(store => {
        return store.archiveStorage.length
    })
    const [first] = useSelector(store => store.archiveStorage.slice(0, store.archiveStorage.length - 1))

    
    const volumes = useSelector(store => store.archiveStorage.map((workout) => {
        const volume = workout.volume;
        const id = workout.workout_id;
        return { 
                volume,
                id 
               }
    }))

    

    //  useEffect(() => {

    //     dispatch({type: 'ARCHIVE_INITIATE', payload: archivedWorkouts[0].workout_type_id})
    //   }, []);

    return (
        <div className="four-container">
            <div className="archive-header">
                <h1>ARCHIVE</h1>
            </div>
            <div className="workouts-container">
                <VolumeChart volumeArray={volumes}/>
                <ImageSlider slides={archivedWorkouts}
                    length={length}
                    first={first} />
            </div>
        </div>
    );
}

export default Four;