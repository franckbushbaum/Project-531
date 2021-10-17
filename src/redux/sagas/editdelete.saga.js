import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* removeWorkout(action){
    console.log('in removeWorkout', action.payload)
    try{


    } catch(err){
        console.log('ERROR in EDITDELETE saga!')
    }
}

function* editDeleteSaga(){
    yield takeLatest('REMOVE_WORKOUT', removeWorkout)

}

export default editDeleteSaga;