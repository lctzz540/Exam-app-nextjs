import * as t from "../types";
const main = (state = { uploadStatus: false, fileContent: [] }, action) => {
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
    default:
      return { ...state };
  }
};
export default main;
