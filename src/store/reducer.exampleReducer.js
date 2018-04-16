const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLACEHOLDER_ACTION':
            return action.payload;

        default:
            return state;
    }
};