import React from "react";
import ReactSwipe from "react-swipe";
import Star from "../Star/index";
import PurchaseNotes from "../PurchaseNotes/index";
import "./style";

class List extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { imgs, recommends, orderDetail, star } = this.props;
    const opt = {
      auto: 2500
    };
    return (
      <div className="detail-list">
        <div className="img-container">
          <ReactSwipe className="carousel" swipeOptions={opt} key={imgs.length}>
            {this.renderSwipe(imgs)}
          </ReactSwipe>
          <div className="desc">
            <h4>无名生煎</h4>
            <p>仅售19.9元.最高价值44元的清爽夏日生煎套餐，建议两人使用</p>
          </div>
        </div>
        <div className="price">
          <div className="price-top">
            <div className="price-item">
              <span className="xPrice">￥19.9</span>
              <span className="exPrice">43</span>
            </div>
            <div className="price-button">
              <div className="sell-out">立即购买</div>
            </div>
          </div>
          <div className="price-bottom">
            <div className="anytime">
              <i className="icon-checkmark-outline" />
              <span>随时可退</span>
            </div>
            <div className="past-due">
              <i className="icon-time" />
              <span>过期可退</span>
            </div>
          </div>
        </div>
        <div className="space" />
        <div className="address">
          <div className="commercial-tenant">
            <span>适用商户</span>
            <i className="icon-cheveron-right" />
          </div>
          <div className="evaluate">
            <div className="aside">
              <h4>无名生煎</h4>
              <div className="star-box">
                <Star star={star} className="star" />
                <span className="distance">>10km</span>
              </div>
            </div>
            <div className="phone">
              <i className="icon-phone" />
            </div>
          </div>
          <div className="detail-address">
            <i className="icon-location" />
            xx路与xx路交汇中心xx楼一楼
          </div>
        </div>
        <div className="space" />
        <PurchaseNotes orderDetail={orderDetail} />
        <div className="promptly-buy">
          <div className="buy">立即购买</div>
        </div>
        <div className="still-look">
          <h4>看了的人还看了</h4>
          <ul>
            {recommends.map((item, index) => (
              <li key={index} className="item">
                <img src={item.thumbnail} alt="" />
                <div>
                  <h5>{item.name}</h5>
                  <span className="look-price">￥{item.price}</span>
                  <span className="look-exPrice">{item.exPrice}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space" />
        <div className="space" />
        <div className="space" />
        <div className="space" />
        <div className="app-return">
          <p>APP下单返积分抵现金</p>
        </div>
      </div>
    );
  }
  renderSwipe(arr) {
    return arr.map((item, index) => {
      return (
        <div key={index} className="item">
          <img src={item} alt="" />
        </div>
      );
    });
  }
}
export default List;
