import {
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_CONFIRM_FAIL,
  USER_CONFIRM_LOADING,
  USER_CONFIRM_SUCCESS,
} from "../Actions/types";
const initialState = {
  register_user_loading: false,
  login_user_loading: false,
  token: null,
  refresh_token: null,
  isLoading: false,
  user: null,
  isAuthenticated: false,
  isActive: false,
  authError: null,
  confirmation_code: null,
  confirm_code_loading: false,
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_LOADING:
      return {
        ...state,
        register_user_loading: true,
        isLoading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        register_user_loading: false,
      };
    case USER_REGISTER_FAIL:
      return {
        isLoading: false,
        authError: action.payload,
      };
    case USER_LOGIN_LOADING:
      return {
        login_user_loading: true,
      };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        login_user_loading: false,
        isAuthenticated: true,
        isActive: true,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        authError: action.payload,
      };

    case USER_CONFIRM_LOADING:
      return {
        confirm_code_loading: true,
      };

    case USER_CONFIRM_SUCCESS:
      // localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        confirmation_code: action.payload,
      };

    case USER_CONFIRM_FAIL:
      return {
        ...state,
        confirm_code_loading: false,
        authError: action.payload,
      };
    default:
      return { ...state };
  }
}
