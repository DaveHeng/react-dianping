import React from "react";
import "./style.less";

class SearchInput extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className="search">
        <div className="search-container">
          <i className="icon-search" />

          <input
            type="text"
            placeholder="输入商家名称"
            onChange={this.changeHandle.bind(this)}
            onKeyUp={this.keyUpHandle.bind(this)}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ""
    });
  }

  changeHandle(e) {
    const value = e.target.value;
    this.setState({
      value: value
    });
  }
  keyUpHandle(e) {
    if (e.keyCode !== 13) {
      return;
    }
    this.props.searchHandle(this.state.value);
  }
}
export default SearchInput;
