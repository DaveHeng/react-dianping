import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/index";
import "./style.less";

class HomeHead extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <div id="homeheader">
          <div className="cityName">
            <Link className="" to="/city">
              <span>{this.props.cityName}</span>
              <i className="icon-cheveron-down" />
            </Link>
          </div>
          <SearchInput searchHandle={this.searchWord.bind(this)} value="" />
          <div className="user">
            <Link to="/login">
              <i className="icon-user-solid-circle" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  searchWord(keyword) {
    this.props.search(keyword);
  }
}
export default HomeHead;
