import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* removeWorkout(action) {
    try {
        const { id, workout_type_id } = action.payload
        yield axios.delete(`/api/workout/${id}`);
        yield put({ type: 'DELETE_WORKED' });
        yield put({ type: 'ARCHIVE_INITIATE', payload: workout_type_id })

    } catch (err) {
        console.log('ERROR in EDITDELETE saga!', err)
    }
}

function* editWorkout(action) {
    // console.log('in Edit Workout', action.payload);
    // console.log('what is this' ,action.payload.reps_three);
    // console.log('and this',action.payload.workout_id);
    try {
        const workoutId = action.payload.workout_id;
        yield axios.put(`/api/workout/${workoutId}`, action.payload);
    } catch (error) {
        console.log('ERROR in EDIT WORKOUT', error)
    }
}

function* editDeleteSaga() {
    yield takeLatest('REMOVE_WORKOUT', removeWorkout)
    yield takeLatest('EDIT_REPS', editWorkout)

}

export default editDeleteSaga;