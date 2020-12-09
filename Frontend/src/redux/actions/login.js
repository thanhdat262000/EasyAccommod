const { actionTypes } = require("../actionTypes.js");

export const login = (userName) => {
  return {
    type: actionTypes.LOGIN,
    payload: userName,
  };
};
