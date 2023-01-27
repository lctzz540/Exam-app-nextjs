import * as t from "../types";
const main = (
  state = {
    uploadStatus: false,
    fileContent: [],
    time: false,
    numOfQuestion: false,
    user: false,
  },
  action
) => {
  switch (action.type) {
    case t.UPLOAD_FILE:
      return {
        ...state,
        uploadStatus: true,
        fileContent: action.payload,
      };
    case t.DELETE_FILE:
      return {
        ...state,
        uploadStatus: false,
        fileContent: [],
      };
    case t.SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case t.SET_N:
      return {
        ...state,
        numOfQuestion: action.payload,
      };
    case t.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};
export default main;
