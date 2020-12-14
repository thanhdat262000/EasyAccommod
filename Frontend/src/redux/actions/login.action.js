const { actionTypes } = require("../actionTypes.js");

export const loginAction = (userName) => {
  return {
    type: actionTypes.LOGIN,
    payload: userName,
  };
};
