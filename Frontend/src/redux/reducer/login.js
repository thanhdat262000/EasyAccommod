const initialState = { isLogin: false, userName: "" };
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true, userName: action.payload };
    default:
      return state;
  }
};
