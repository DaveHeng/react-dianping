import React from "react";
import List from "../../../components/DetaiList/index";
import { get } from "../../../fetch/get";

class DetailList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imgs: [],
      recommends: [],
      orderDetail: {},
      star: 0
    };
  }
  render() {
    return (
      <div>
        <List
          imgs={this.state.imgs}
          recommends={this.state.recommends}
          orderDetail={this.state.orderDetail}
          star={this.state.star}
        />
      </div>
    );
  }
  componentDidMount() {
    const result = get("/api/orderDetail");
    this.resultHandle(result);
  }
  resultHandle(result) {
    result
      .then(res => {
        return res.data;
      })
      .then(json => {
        const { imgs, recommends, orderDetail, star } = json;
        this.setState({
          imgs,
          recommends,
          orderDetail,
          star
        });
      });
  }
}
export default DetailList;
