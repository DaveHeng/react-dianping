import React from "react";
import SearchInput from "../SearchInput/index";
import "./style.less";

class SearchHead extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="search-head">
        <div onClick={this.goBackHandle.bind(this)}>
          <i className="icon-arrow-left" />
        </div>
        <SearchInput
          className="search"
          value={this.props.keyword || ""}
          searchHandle={this.searchWord.bind(this)}
        />
      </div>
    );
  }
  goBackHandle() {
    this.props.goBack();
  }
  searchWord(keyword) {
    this.props.search(keyword);
  }
}
export default SearchHead;
