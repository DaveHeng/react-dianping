import React from "react";
import "./style.less";

class UserList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="user-list">
        <div className="userName">
          <i className="icon-user-solid-circle" />
          <span>{this.props.user}</span>
        </div>
        <div className="cityName">
          <i className="icon-location" />
          <span>{this.props.city}</span>
        </div>
      </div>
    );
  }
}
export default UserList;
