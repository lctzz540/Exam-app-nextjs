import * as t from "../types";
export const uploadFile = (fileContent) => (dispatch) => {
  dispatch({ type: t.UPLOAD_FILE, payload: fileContent });
};
export const deleteFile = () => (dispatch) => {
  dispatch({ type: t.DELETE_FILE, payload: false });
};
export const setTime = (time) => (dispatch) => {
  dispatch({ type: t.SET_TIME, payload: time });
};
export const setNumOfQuestion = (numOfQuestion) => (dispatch) => {
  dispatch({ type: t.SET_N, payload: numOfQuestion });
};
export const setUser = (username) => (dispatch) => {
  dispatch({ type: t.SET_USER, payload: username });
};
