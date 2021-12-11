const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
const USER_LOGIN_SUCCESS1 = "USER_LOGIN_SUCCESS1";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";

const initialState = {
  loading: null,
  message: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_ATTEMPT:
      return {
        ...state,
        message: null,
        loading: true,
      };
    case CLEAR_LOGIN_STATE:
      return { loading: null, message: null, error: null };
    case USER_LOGIN_SUCCESS1:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
