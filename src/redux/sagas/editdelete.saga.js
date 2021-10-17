import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* removeWorkout(action){
    console.log('in removeWorkout', action.payload)
    try{
        const workoutId = action.payload
        yield axios.delete(`/api/workout/${workoutId}`);
        yield put({type: 'DELETE_WORKED'});

    } catch(err){
        console.log('ERROR in EDITDELETE saga!')
    }
}

function* editDeleteSaga(){
    yield takeLatest('REMOVE_WORKOUT', removeWorkout)

}

export default editDeleteSaga;