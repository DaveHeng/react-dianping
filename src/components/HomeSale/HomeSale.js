import React from "react";
import "./style.less";

class HomeSale extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { cheap } = this.props;
    return (
      <div className="super-sale">
        <div className="title">
          <h1>超值特惠</h1>
          <div className="more">
            <span>更多优惠</span>
            <i className="icon-cheveron-right" />
          </div>
        </div>

        <ul>
          {cheap.map((item, index) => (
            <li key={index}>
              <img src={item.thumbnail} alt="" />
              <p className="name">{item.name}</p>
              <span className="price">{"￥" + item.price}</span>
              <del className="subtract">{item.subtract}</del>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomeSale;
