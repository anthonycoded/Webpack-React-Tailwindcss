import axios from "axios";
const USER_LOGIN_ATTEMPT = "USER_LOGIN_ATTEMPT";
const USER_LOGIN_SUCCESS1 = "USER_LOGIN_SUCCESS1";
const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";

// axios.defaults.withCredentials = true;
export const userLoginMain = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_ATTEMPT });
    const config = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      // credentials: "include",
      // xhrFields: { withCredentials: true },
    };

    // const { data } = await axios.post(
    //   "https://testenv.w-w-i-s.com/iTeller21/api/user/login?entity=AHHRV",
    //   {
    //     channel: "mTeller",
    //     username: "Demos1234",
    //     password: "Demos1234",
    //   },
    //   config
    // );

    let response = data[0];
    let { text } = response;

    dispatch({ type: USER_LOGIN_SUCCESS1, payload: text });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLoginMainFetch = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_ATTEMPT });
    // const config = {
    //   headers: {
    //     "Content-type": "application/json; charset=utf-8",
    //   },
    //   credentials: "include",
    //   xhrFields: { withCredentials: true },
    // };
    const config = {
      method: "POST",
      headers: {
        // Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: "iTeller",
        username: "Demos1234",
        password: "Demos1234",
      }),
      // credentials: "include",
    };

    const { data } = await fetch(
      "https://testenv.w-w-i-s.com/iTeller21/api/user/login?entity=AHHRV",
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS1, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearState = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_LOGIN_STATE });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
