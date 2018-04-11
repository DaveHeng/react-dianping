import React from "react";
import Header from "../../components/Header/Header";
import CurrentCity from "../../components/CurrentCity/CurrentCity";
import CityList from "../../components/CityList/CityList";

import * as userInfoActionsFromOtherFile from "../../action/userinfo";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LocalStore from "../../util/loaclStorage";
import { CITYNAME } from "../../config/localStoreKey";

class City extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Header title="选择城市" back={this.props.history} />
        <div className="space" />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <div className="space" />
        <CityList changeFn={this.changeCity.bind(this)} />
      </div>
    );
  }
  changeCity(newCity) {
    //修改redux
    const userinfo = this.props.userinfo;

    userinfo.cityName = newCity;

    this.props.userInfoActions.update(userinfo);

    //修改 localStorage
    LocalStore.setItem(CITYNAME, newCity);

    //跳转到首页
    this.props.history.goBack();
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
export default connect(mapStateToProps, mapDispatchToProps)(City);
