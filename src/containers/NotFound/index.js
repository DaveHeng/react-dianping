import React from "react";
import "./style.less";

class NotFound extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="notFound">
        <h2>404 not found</h2>
      </div>
    );
  }
}
export default NotFound;
