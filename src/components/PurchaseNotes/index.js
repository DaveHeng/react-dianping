import React from "react";
import "./style.less";

class PurchaseNotes extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="know-box">
        <ul className="purchase-notes">
          <dt>购买须知</dt>
          {renderCell(this.props.orderDetail)}
        </ul>
      </div>
    );
  }
}
const renderCell = obj => {
  let resultJSX = [];
  for (let key in obj) {
    let template = "";
    let title = "";
    if (key === "youxiaoqi") {
      title = "有效期";
    } else if (key === "chuwairiqi") {
      title = "除外日期";
    } else if (key === "shiyongshijian") {
      title = "使用时间";
    } else if (key === "yuyuetixing") {
      title = "预约提醒";
    } else if (key === "guizetixing") {
      title = "规则提醒";
    } else if (key === "baojian") {
      title = "包间";
    } else if (key === "tangshiwaidai") {
      title = "堂食外带";
    } else if ("wenxintishi") {
      title = "温馨提示";
    }
    template = (
      <li key={key} className="notes-item">
        <h5>{title}</h5>
        {obj[key].map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </li>
    );
    resultJSX.push(template);
  }
  return resultJSX;
};

export default PurchaseNotes;
