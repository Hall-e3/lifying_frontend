import { confirmationEmailCode, loginPost, registerPost } from "../api";
import {
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_CONFIRM_LOADING,
  USER_CONFIRM_SUCCESS,
  USER_CONFIRM_FAIL,
} from "./types";

export const registerData = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_LOADING,
    });
    const { data } = await registerPost(formData);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.message.message,
      });
    }
  }
};

export const loginData = (loginformData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_LOADING,
    });
    const { data } = await loginPost(loginformData);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  }
};

export const confirmationCode = (confirmCode) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONFIRM_LOADING,
    });
    const { data } = await confirmationEmailCode(confirmCode);
    dispatch({
      type: USER_CONFIRM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: USER_CONFIRM_FAIL,
        payload: error.response.data.message,
      });
    }
  }
};
