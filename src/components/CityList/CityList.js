import React from "react";
import "./style.less";
import { get } from "../../fetch/get";

class CityList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: []
    };
  }
  render() {
    const cityName = this.state.data;
    return (
      <div className="city-list">
        <h3>热门城市</h3>
        <ul>
          {cityName.map((item, index) => (
            <li
              key={index}
              onClick={this.getCityName.bind(this)}
              className="item"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  getCityName(event) {
    this.props.changeFn(event.target.innerHTML);
  }
  componentDidMount() {
    let result = get("/api/cities");
    result
      .then(res => {
        return res.data;
      })
      .then(name => {
        const data = name;
        this.setState({
          data: data
        });
      });
  }
}
export default CityList;
