import { createStore } from "redux";
import reducers from "./reducers/index.js";

//create store passing in the compiled reducers from index.js in reducers
const store = createStore(reducers);

//export store
export default store;
