import React from "react";
import SearchHead from "../../components/SearchHead/index";
import SearchList from "./subpage/list";

import * as userInfoActionsFromOtherFile from "../../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Search extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const keyword = this.props.match.params.keyword;
    return (
      <div>
        <SearchHead
          goBack={this.back.bind(this)}
          keyword={keyword}
          search={this.entryHandle.bind(this)}
        />
        <SearchList keyword={keyword} />
      </div>
    );
  }
  back() {
    //后退
    this.props.history.goBack();
  }
  entryHandle(keyword) {
    this.props.history.push("/search/" + encodeURIComponent(keyword));
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
