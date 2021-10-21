const recentWorkout = (state = {}, action) => {
    switch (action.type) {
        case 'DATA_FOR_SECOND_PAGE':
            return action.payload;
        default:
            return state;
    }
}

export default recentWorkout;