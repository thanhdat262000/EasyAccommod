import { createStore } from "react-redux";
import { rootReducer } from "./reducer";
export const store = createStore(rootReducer);
