import React from "react";
import "./style.less";

class LoadMore extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let isLoadingMore = this.props.isLoadingMore;
    // console.log(this.porps);
    // let isLoadingMore = this.porps.isLoadingMore;

    return (
      <div className="load-more" ref={div => (this.div = div)}>
        {isLoadingMore ? (
          <span>加载中...</span>
        ) : (
          <span onClick={this.loadMoreHandle.bind(this)}>点击加载</span>
        )}
      </div>
    );
  }
  loadMoreHandle() {
    //执行传递过来的函数
    this.props.loadMoreFn();
  }
  componentDidMount() {
    //使用节流来下拉加载
    let timed;
    const loadMoreFn = this.props.loadMoreFn;
    const div = this.div;

    //判断屏幕高度，和加载框到屏幕上方的高度
    function callbake() {
      const top = div.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if (top && top < windowHeight) {
        loadMoreFn();
      }
    }
    //触发滚动事件，加载数据
    window.addEventListener(
      "scroll",
      function() {
        if (this.props.isLoadingMore) {
          return;
        }
        if (timed) {
          clearTimeout(timed);
        }
        timed = setTimeout(callbake, 50);
      }.bind(this),
      false
    );
  }
}
export default LoadMore;
