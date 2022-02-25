import { combineReducers } from "redux";
import Auth from "./auth.reducers";
import posts from "./posts";

export const reducers = combineReducers({ Auth, posts });
