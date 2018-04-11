import React from "react";
import OrderListComponent from "../../../components/OrderListComponent/index";
import { get } from "../../../fetch/get";
import { post } from "../../../fetch/post";
class OrderList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <OrderListComponent
            data={this.state.data}
            submitComment={this.submitComment.bind(this)}
          />
        ) : (
          <div>加载中...</div>
        )}
      </div>
    );
  }
  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.loadData(user);
    }
  }
  loadData(user) {
    const comment = [];
    const result = get("/api/orderDetail", { params: user });
    result
      .then(res => {
        return res.data;
      })
      .then(json => {
        const { recommends } = json;
        this.setState({
          data: recommends,
          comment: comment
        });
      });
  }
  //   submitComment(id , value, callback) {
  //     const result = postComment(id, value);
  //     result.then(res => {
  //       return res.json()
  //     }).then(json => {
  //       if (json.errno === 0) {
  //           // 已经评价，修改状态
  //           callback()
  //       }
  //     })
  //   }
  // }
  submitComment(id, value, callback) {
    const result = post("/api/submit", { id: id, value: value });
    result
      .then(res => {
        return res.data;
      })
      .then(data => {
        callback();
      });
  }
}
export default OrderList;
