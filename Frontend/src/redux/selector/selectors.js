export const getLoginState = (store) => store.loginReducer.isLogin;
export const getUsserName = (store) => store.loginReducer.userName;
export const getPrivilege = (store) => store.loginReducer.privilege;
