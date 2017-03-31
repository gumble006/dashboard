import { browserHistory } from 'react-router';
import axios from 'axios';

import { AUTH_USER, DE_AUTH_USER, AUTH_ERROR, FETCH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser(token) {
  return (dispatch) => {
    dispatch({ type: AUTH_USER });

    localStorage.setItem('dashboardToken', token);
    
    browserHistory.push('/home');
  };
}

export function fetchUser() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/settings`, {
      // add token as a header
      headers: { authorization: localStorage.getItem('dashboardToken') },
    })
    .then((response) => {
      localStorage.setItem('dashboardUser', JSON.stringify(response.data));

      dispatch({
        type: FETCH_USER,
        payload: response.data,
      }); 
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export function signoutUser() {
  localStorage.removeItem('dashboardToken');
  localStorage.removeItem('dashboardUser');

  return {
    type: DE_AUTH_USER,
  };
}