import React from "react";
import { get } from "../../../fetch/get";
import HomeLike from "../../../components/GuessLike/HomeLike";
import LoadMore from "../../../components/LoadMore/LoadMore";
import { connect } from "react-redux";
import "./style.less";

const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 1
};

class SearchList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }
  render() {
    return (
      <div className="search-list">
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
    //加载

    this.loadFristData();
  }

  loadFristData() {
    let cityName = this.props.userinfo.cityName;
    let keyword = this.props.keyword || "";
    let page = this.state.page;
    let result = get("/api/getULikeData", {
      city: cityName,
      page: page,
      key: keyword
    });
    this.resultHandle(result);
  }

  loadMoreData() {
    this.setState({
      isLoadingMore: true
    });
    let cityName = this.props.userinfo.cityName;
    let keyword = this.props.keyword || "";
    let page = this.state.page;
    let result = get("/api/getULikeData", {
      city: cityName,
      page: page,
      key: keyword
    });
    this.resultHandle(result);
    this.setState({
      isLoadingMore: false,
      page: page + 1
    });
  }
  resultHandle(result) {
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

  componentDidUpdate(prevProps, prevState) {
    let keyword = this.props.keyword;

    if (keyword === prevProps.keyword) {
      return;
    }

    //重置数据
    this.setState(initialState);

    //重新加载数据
    this.loadFristData();
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
