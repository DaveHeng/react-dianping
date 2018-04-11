import React from "react";
import Item from "./subpage/index";
import "./subpage/style.less";

class OrderListComponent extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const data = this.props.data;
    const submitComment = this.props.submitComment;
    return (
      <div className="still-look">
        <h4>您的订单</h4>
        <ul>
          {data.map((item, index) => {
            return (
              <Item key={index} item={item} submitComment={submitComment} />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default OrderListComponent;
