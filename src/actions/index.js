import store from './../store';
import axios from './../http';

// https://swapi.co/api/people/
export const getPerson = () => {
    // delete inside here and replace with actual API request using axios
    setTimeout(() => {

        store.dispatch({
            type: 'PERSON/GET_PERSON',
            payload: {
                name: 'FAKE API FIRED'
            }
        });

    }, 3000);
};