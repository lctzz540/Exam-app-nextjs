import * as t from "../types";
export const uploadFile = (fileContent) => (dispatch) => {
  dispatch({ type: t.UPLOAD_FILE, payload: fileContent });
};
export const deleteFile = () => (dispatch) => {
  dispatch({ type: t.DELETE_FILE, payload: false });
};
