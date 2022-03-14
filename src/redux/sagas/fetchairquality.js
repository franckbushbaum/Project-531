import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchAirQuality(){
    try{
        console.log('what is action?', action)
    } catch(error) {
        console.log('fetchworkout error', error);
    }
}

function* fetchAirQualitySaga(){
    yield takeLatest('FETCH_AIR_QUALITY', fetchAirQuality)
}

export default fetchAirQualitySaga;