const INITIAL_STATE = {
    state1: 'Hello',
    state2: 'World'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLACEHOLDER_ACTION':
            return action.payload;

        default:
            return state;
    }
};