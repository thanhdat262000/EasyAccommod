import { createStore } from "redux";
import { rootReducer } from "./reducer";
import { loginReducer } from "./reducer/login";
export const store = createStore(rootReducer);
