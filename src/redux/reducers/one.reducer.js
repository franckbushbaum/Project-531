const workoutTypeId = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKOUT_TYPE_ID':
            return action.payload;
        default:
            return state;
    }
}

export default workoutTypeId;