
const fetchWorkout = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKOUT':
            return action.payload;
        case 'UNSET_WORKOUT':
            return [];
        default:
            return state;
    }
}


export default fetchWorkout;

