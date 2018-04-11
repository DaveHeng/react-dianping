import React from "react";
import StoreComponent from "../../../components/Buyandstore/index";

import * as storeActionsFromOtherFile from "../../../action/store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class BuyAndStore extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isStore: false
    };
  }
  render() {
    return (
      <div>
        <StoreComponent
          isStore={this.state.isStore}
          buyHandle={this.buyHandle.bind(this)}
          storeHandle={this.storeHandle.bind(this)}
        />
      </div>
    );
  }
  componentDidMount() {
    // console.log(this.props.store);
    // console.log(this.props.storeActions);
    this.checkStoreState();
  }
  //验证用户是否收藏
  checkStoreState() {
    const id = this.props.id;
    const store = this.props.store;

    //满足一个即可
    store.some(item => {
      if (item.id === id) {
        //已经被收藏

        this.setState({
          isStore: true
        });
      }
      //跳出循环
      return false;
    });
  }

  //检查登陆状态

  loginCheck() {
    const id = this.props.id;
    const userName = this.props.userinfo.userName;
    if (!userName) {
      this.props.skip.push({
        pathname: "/login",
        query: {
          id: id,
          name: "detail",
          state: "detail"
        }
      });
      return false;
    }
    return true;
  }
  //购买事件
  buyHandle() {
    // 验证登录，未登录则return
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }

    // 此过程为模拟购买，因此可省去复杂的购买过程

    // 跳转到用户主页
    this.props.skip.push("/user");
  }

  //收藏事件
  storeHandle() {
    // 验证登录，未登录则return

    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }

    const id = this.props.id;
    const action = this.props.storeActions;
    if (this.state.isStore) {
      //已收藏，取消收藏
      action.rm({ id: id });
    } else {
      action.add({ id: id });
    }
    //修改状态
    this.setState({
      isStore: !this.state.isStore
    });
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  };
}
function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyAndStore);
