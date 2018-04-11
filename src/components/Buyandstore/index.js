import React from "react";
import "./style.less";

class StoreComponent extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="buy-store">
        {this.props.isStore ? (
          <button
            className="selected"
            onClick={this.storeClickHandle.bind(this)}
          >
            已收藏
          </button>
        ) : (
          <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
        )}
        <button onClick={this.buyClickHandle.bind(this)}>立即购买</button>
      </div>
    );
  }

  buyClickHandle() {
    const buyHandle = this.props.buyHandle;
    buyHandle();
  }
  storeClickHandle() {
    const storeHandle = this.props.storeHandle();
  }
}
export default StoreComponent;
