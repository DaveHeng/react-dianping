import React from "react";
import "./style.less";

class LoginComponent extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="login">
        <div className="window">
          <div className="phone">
            <i className="icon-mobile2" />
            <input
              type="text"
              placeholder="请输入手机号"
              ref={input => (this.input = input)}
            />
          </div>

          <div className="verification">
            <i className="icon-checkmark-outline" />
            <input type="text" type="text" placeholder="请输入验证码" />
            <a
              href=""
              ref={a => (this.a = a)}
              onClick={this.aHandle.bind(this)}
            >
              发送验证码
            </a>
          </div>
        </div>
        <div className="login-box">
          <button className="logining" onClick={this.buttonHandle.bind(this)}>
            登陆
          </button>
          <button className="sign-in">注册</button>
        </div>
      </div>
    );
  }

  aHandle(e) {
    e.preventDefault();
  }
  buttonHandle() {
    const node = this.input;
    if (node.value === "") {
      alert("请输入手机号");
      return;
    }
    setTimeout(() => {
      this.props.loginHandle(node.value);
    }, 1000);
  }
}
export default LoginComponent;
