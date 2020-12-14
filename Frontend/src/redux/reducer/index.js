import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "./login";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};
export const rootReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    loginReducer,
  })
);
