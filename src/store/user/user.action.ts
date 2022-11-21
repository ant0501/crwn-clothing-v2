import { USER_ACTION_TYPES } from "./user.type";
import {
  createAction,
  withMatcher,
  Action,
  ActionwithPayload,
} from "../../utils/reducer/reducer.utils";
import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type setCurrentUser = ActionwithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;
export type googleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type emailSignInStart = ActionwithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type signInSuccess = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;
export type signInFailed = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;
export type signUpStart = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type signUpSuccess = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;
export type signUpFailed = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;
export type signOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type signOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type signOutFailed = ActionwithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const setCurrentUser = withMatcher(
  (user: UserData): setCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const checkUserSession = withMatcher(
  (): checkUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): googleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): emailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): signInSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): signInFailed =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): signUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): signUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): signUpFailed =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): signOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): signOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): signOutFailed =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
