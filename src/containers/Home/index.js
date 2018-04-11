import React from "react";
import Homeheade from "../../components/HomeHead/Homeheade";
import Category from "../../components/Category/index";
import GuessLike from "./subpage/GuessLike";
import Ad from "./subpage/Ad";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Home extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Homeheade
          cityName={this.props.userinfo.cityName}
          search={this.entryHandle.bind(this)}
        />
        <Category />
        <div className="space" />
        <Ad />
        <div className="space" />
        <GuessLike cityName={this.props.userinfo.cityName} />
      </div>
    );
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
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
