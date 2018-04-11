import React from "react";
import Header from "../../components/Header/Header";
import LoginComponent from "../../components/LoginComponent/index";
import { Redirect } from "react-router-dom";

import * as userInfoActionsFromOtherFile from "../../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Login extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checking: true
    };
  }
  render() {
    return (
      <div>
        <Header title="登陆" back={this.props.history} />
        {this.state.checking ? (
          <div>等待中...</div>
        ) : (
          <LoginComponent loginHandle={this.loginHandle.bind(this)} />
        )}
      </div>
    );
  }
  componentDidMount() {
    this.doCheck();
  }
  doCheck() {
    const userinfo = this.props.userinfo;
    if (userinfo.userName) {
      //存在用户名,已经登陆
      this.goUserPage();
    } else {
      //未登录
      this.setState({
        checking: false
      });
    }
  }

  //登录后的逻辑

  loginHandle(userName) {
    //保存用户名
    const dispatch = this.props.userInfoActions;
    let userinfo = this.props.userinfo;
    userinfo.userName = userName;
    dispatch.update(userinfo);

    //跳转链接
    this.goUserPage();
  }

  goUserPage() {
    //跳转到用户页面
    if (
      this.props.history.location.query &&
      this.props.history.location.query.name === "detail"
    ) {
      <Redirect to={"/detail/" + this.props.history.location.query.id} />;
      this.props.history.goBack();
    } else {
      this.props.history.push("/user");
      <Redirect to="/" />;
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
