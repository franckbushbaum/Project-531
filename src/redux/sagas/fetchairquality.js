import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchAirQuality(action){
    try{
        const { lon, lat, user } = action.payload

        const coordinate = { lat, lon}

        console.log('what is coordinate', coordinate)

        console.log('lat is always positive', lat)
        console.log('lon is negative', lon)

        const airQuality = yield axios.get(`/api/air-quality/`, { params: coordinate});

        // yield axios.put(`/api/workout/${workoutId}`, action.payload);

        console.log('is this in Terminal? Nah..', airQuality)
    } catch(error) {
        console.log('fetchAirQuality error', error);
    }
}

function* fetchAirQualitySaga(){
    yield takeLatest('FETCH_AIR_QUALITY', fetchAirQuality)
}

export default fetchAirQualitySaga;