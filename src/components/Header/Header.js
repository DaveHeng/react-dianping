import React from "react";
import "./style.less";

class Header extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="header">
        <i className="icon-arrow-left" onClick={this.goBack.bind(this)} />
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
  goBack() {
    const backRoute = this.props.backRoute;
    if (backRoute) {
      this.props.back.push(backRoute);
    } else {
      this.props.back.goBack();
    }
  }
}
export default Header;
