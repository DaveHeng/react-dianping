import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import RouterMap from "./router/routerMap";

let store = createStore(
  reducers,
  //   applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initDone: false
    };
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.initDone ? <RouterMap /> : <div>正在加载...</div>}
      </Provider>
    );
  }

  componentDidMount() {
    this.setState({
      initDone: true
    });
  }
}

export default App;
