import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ThreeItem({workout}) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_WORKOUT', payload: workout.workout_id });
    // }, []);
    // const displayWorkout = () => {
    // dispatch({ type: 'FETCH_WORKOUT', payload: workout.workout_id });
    // }

    return(
        <ul><li>{workout.workout_id}</li></ul>
    );
}

export default ThreeItem;