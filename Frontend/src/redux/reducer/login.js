const initialState = { isLogin: false, userName: "" };
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true, userName: action.payload };
    case "LOGOUT":
      return { ...state, isLogin: false, userName: "" };
    default:
      return state;
  }
};
