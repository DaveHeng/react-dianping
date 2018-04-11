import React from "react";
import "./style.less";

class Item extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      commentState: 2
    };
  }
  render() {
    const { item } = this.props;
    return (
      <li className="item">
        <img src={item.thumbnail} alt="" />
        <div className="item-flex">
          <div className="left">
            <h5>{item.name}</h5>
            <span className="look-price">￥{item.price}</span>
            <span className="look-exPrice">{item.exPrice}</span>
          </div>
          <div className="right">
            {this.state.commentState === 0 ? (
              //评价中
              <button className="btn" onClick={this.showHandle.bind(this)}>
                评价中
              </button>
            ) : this.state.commentState === 1 ? (
              //评价中
              ""
            ) : (
              //已评价
              <button className="btn unseleted">已评价</button>
            )}
          </div>
        </div>
        {this.state.commentState === 1 ? (
          <div className="comment-box">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              ref={textarea => (this.textarea = textarea)}
            />
            <button onClick={this.submitClickHandle.bind(this)}>提交</button>
            <button onClick={this.hideHandle.bind(this)}>取消</button>
          </div>
        ) : (
          ""
        )}
      </li>
    );
  }
  componentDidMount() {
    const { item } = this.props;
    this.setState({
      commentState: item.commentState
    });
  }
  showHandle() {
    this.setState({
      commentState: 1
    });
  }

  submitClickHandle() {
    const submitComment = this.props.submitComment;
    const id = Math.random()
      .toString()
      .slice(2);

    const text = this.textarea;
    const value = text.value.trim();
    if (!value) {
      return;
    }
    submitComment(id, value, this.commentOK.bind(this));
  }

  commentOK() {
    this.setState({
      commentState: 2
    });
  }

  hideHandle() {
    this.setState({
      commentState: 0
    });
  }
}
export default Item;
