import React from "react";
import "./style.less";

import { Link } from "react-router-dom";

class HomeLike extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="guessLike">
        <h2>猜你喜欢</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <Link to={"/detail/" + item.id}>
                <div className="item l-item">
                  <img src={item.thumbnail} alt="" />
                  <span className={item.tag === "" ? "" : "tag"}>
                    {item.tag}
                  </span>
                </div>
                <div className="item r-item">
                  <div className="name">{item.name}</div>
                  <div className="desc">{item.desc}</div>
                  <div className="item-price">
                    <div>
                      <span className="price">￥{item.price}</span>
                      <span className="exPrice">{item.exPrice}</span>
                    </div>

                    <div className="cell">已售{item.cell}份</div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomeLike;
