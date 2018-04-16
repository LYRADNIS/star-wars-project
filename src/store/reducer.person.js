const INITIAL_STATE = {
    name: 'API NOT FIRED'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PERSON/GET_PERSON':
            return action.payload;

        default:
            return state;
    }
};