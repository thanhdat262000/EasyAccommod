const initialState = { isLogin: false };
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true };
    default:
      return;
  }
};
