import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./home";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}
