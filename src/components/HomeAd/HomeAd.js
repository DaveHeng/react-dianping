import React from "react";
import "./style.less";

class HomeAd extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="homeAd">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div
                className={
                  index % 2 === 0
                    ? "homeAd-item item-second-color"
                    : "homeAd-item item-color"
                }
              >
                <img src={item.thumbnail} alt="" className="homeAd-img" />
                <p className="homeAd-title">{item.name}</p>
                <p
                  className={
                    index % 2 === 0
                      ? "homeAd-subName bgcolor1"
                      : "homeAd-subName bgcolor2"
                  }
                >
                  {item.subName}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomeAd;
