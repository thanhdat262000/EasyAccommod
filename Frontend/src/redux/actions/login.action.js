const { actionTypes } = require("../actionTypes.js");

export const loginAction = (data) => {
  return {
    type: actionTypes.LOGIN,
    payload: data,
  };
};
