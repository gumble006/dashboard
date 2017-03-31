import { AUTH_USER, DE_AUTH_USER, AUTH_ERROR, FETCH_USER, LOAD_PREVIOUS } from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
    case DE_AUTH_USER:
      return { ...state, authenticated: false, error: '' };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_USER:
      return { ...state, user: action.payload };
    case LOAD_PREVIOUS:
      return { ...state, 
        user: action.payload,
        authenticated: true,
        error: '',
      };
    default:
      return state;
  }
}