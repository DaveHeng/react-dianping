import React from "react";
import "./style.less";

class CurrentCity extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <div className="current-city">{this.props.cityName}</div>;
  }
}
export default CurrentCity;
