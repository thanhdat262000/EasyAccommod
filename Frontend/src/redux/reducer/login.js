const initialState = { isLogin: false };
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload, isLogin: true };
    case "LOGOUT":
      return { isLogin: false };
    default:
      return state;
  }
};
