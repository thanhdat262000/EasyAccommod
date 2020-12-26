export const getLoginState = (store) => store.loginReducer.isLogin;
export const getUsserName = (store) => store.loginReducer.userName;
export const getEmail = (store) => store.loginReducer.email;
export const getPrivilege = (store) => store.loginReducer.privilege;
