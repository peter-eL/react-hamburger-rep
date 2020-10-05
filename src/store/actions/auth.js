import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const auth = (email, password) => {
  console.log("auth = "+email +", "+password);
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        console.log(authData);
        // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5gf7kQs-g8iaB-0CPSRuI2EBsS8Sa8Y8';

        // const link = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        const link = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvMWqDizLf5Ig2yGagmYyIXqhOxicollo';
        // const link = 'https://identitytoolkit.googleapis.com/v1/accounts:signupNewUser?key=';
        // const key = 'AIzaSyBvMWqDizLf5Ig2yGagmYyIXqhOxicollo';
        // const url = link + key;
        axios.post(link, authData)
              .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
              console.log(err);
              dispatch(authFail);
            });
    };
}
