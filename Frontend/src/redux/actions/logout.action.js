const { actionTypes } = require("../actionTypes.js");

export const logoutAction = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
