import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* removeWorkout(action){
    console.log('in removeWorkout', action.payload)
    try{
        const workoutId = action.payload
        yield axios.delete(`/api/workout/${workoutId}`);
        yield put({type: 'DELETE_WORKED'});

    } catch(err){
        console.log('ERROR in EDITDELETE saga!',err)
    }
}

function* editWorkout(action){
    console.log('in Edit Workout', action.payload);
    console.log('what is this' ,action.payload.reps_three);
    console.log('and this',action.payload.workout_id);
    try{
        const workoutId = action.payload.workout_id;
        yield axios.put(`/api/workout/${workoutId}`, action.payload);
    } catch(error){
        console.log('ERROR in EDIT WORKOUT', error)
    }
}

function* editDeleteSaga(){
    yield takeLatest('REMOVE_WORKOUT', removeWorkout)
    yield takeLatest('EDIT_REPS', editWorkout)

}

export default editDeleteSaga;