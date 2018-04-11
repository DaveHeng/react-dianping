import React from "react";
import Header from "../../components/Header/Header";
import { Redirect } from "react-router-dom";
import UserList from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";

import * as userInfoActionsFromOtherFile from "../../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class User extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Header title="用户中心" back={this.props.history} backRoute="/" />
        <UserList
          user={this.props.userinfo.userName}
          city={this.props.userinfo.cityName}
        />
        <OrderList user={this.props.userinfo.userName} />
      </div>
    );
  }
  componentDidMount() {
    const user = this.props.userinfo.userName;
    if (!user) {
      this.props.history.push("/login");
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(User);
