import reducer from "./reducer.js";
import { createStore } from "redux";
window.store; //global variable

if (!window.store) {
  // apply singleton design pattern
  window.store = createStore(reducer);
}
export default window.store;
