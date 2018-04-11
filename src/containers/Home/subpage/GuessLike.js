import React from "react";
import HomeLike from "../../../components/GuessLike/HomeLike";
import LoadMore from "../../../components/LoadMore/LoadMore";
import { get } from "../../../fetch/get";

class GuessLike extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [], //存储列表信息
      hasMore: false, //记录当前状态下还有没有更多的数据可供加载
      isLoadingMore: false, //记录当前状态下是"加载中"还是 "点击加载更多"
      page: 1 //下一页的页码
    };
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <HomeLike data={this.state.data} />
        ) : (
          <div>加载中...</div>
        )}
        {this.state.page < 5 ? (
          <LoadMore
            isLoadingMore={this.state.isLoadingMore}
            loadMoreFn={this.loadMoreData.bind(this)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  componentDidMount() {
    //首屏加载
    this.loadFristData();
  }
  loadFristData() {
    //请求数据
    const cityName = this.props.cityName;
    const result = get("api/getULikeData", { city: cityName, page: 0 });
    this.resultHandle(result);
  }
  loadMoreData() {
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.cityName;
    const page = this.state.page;
    const result = get("api/getULikeData", { city: cityName, page: page });
    this.resultHandle(result);
    this.setState({
      page: page + 1,
      isLoadingMore: false
    });
  }

  resultHandle(result) {
    //处理数据
    result
      .then(res => {
        return res.data;
      })
      .then(json => {
        const data = json;
        this.setState({
          data: this.state.data.concat(data)
        });
      });
  }
}
export default GuessLike;
