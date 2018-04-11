import React from "react";
import HomeAd from "../../../components/HomeAd/HomeAd";
import HomeSale from "../../../components/HomeSale/HomeSale";
import { get } from "../../../fetch/get";

class Ad extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
      cheap: []
    };
  }
  render() {
    return (
      <div>
        {this.state.data.length ? (
          <HomeAd data={this.state.data} />
        ) : (
          <div>加载中...</div>
        )}
        <div className="space" />
        {this.state.cheap.length ? (
          <HomeSale cheap={this.state.cheap} />
        ) : (
          <div>加载中...</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    let result = get("/api/getAdData");
    result
      .then(res => {
        return res.data;
      })
      .then(json => {
        const data = json.ad;
        const cheap = json.cheap;
        if (data.length) {
          this.setState({
            data: data,
            cheap: cheap
          });
        }
      });
    // this.setState({
    //   data: result
    // });
  }
}
export default Ad;
