import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from "react-hot-loader"; //设置这里

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

// Hot Module Replacement API
if (module.hot && process.env.NODE_ENV !== "production") {
  module.hot.accept("./App", () => {
    render(require("./App").default);
  });
}
