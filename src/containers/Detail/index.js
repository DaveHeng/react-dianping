import React from "react";
import Header from "../../components/Header/Header";
import DetailList from "./subpage/list";
import BuyAndStore from "./subpage/BuyAndStore";

import * as userInfoActionsFromOtherFile from "../../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Detail extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Header title="团购详情" back={this.props.history} />
        <DetailList id={id} />
        <BuyAndStore id={id} skip={this.props.history} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
