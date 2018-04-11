import React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import LocalStore from "../util/loaclStorage";
import { CITYNAME } from "../config/localStoreKey";
import * as userInfoActionsFromOtherFile from "../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { get } from "../fetch/get";

import Home from "../containers/Home/index";
import City from "../containers/City/index";
import User from "../containers/User/index";
import Search from "../containers/Search/index";
import Detail from "../containers/Detail/index";
import NotFound from "../containers/NotFound/index";
import Login from "../containers/Login/index";

import "../../staic/css/common.css";
import "../../staic/css/style.css";

const history = createHistory();

class RouterMap extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City} />
            <Route path="/search/:keyword" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    let result = get("/api/getLocation");
    result
      .then(res => {
        return res.data;
      })
      .then(data => {
        const initCityName = data.cityName;
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
          cityName = initCityName;
        }

        this.props.userInfoActions.update({
          cityName: cityName
        });
      });
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterMap);
