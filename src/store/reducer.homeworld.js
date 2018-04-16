const INITIAL_STATE = {
    name: 'API NOT FIRED'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HOMEWORLD/GET_HOMEWORLD':
            return action.payload;

        default:
            return state;
    }
};