import React from "react";
import "./style.less";

class Star extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const star = this.props.star;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = item <= star ? "light" : "";
          return <i className={"icon-star-full2 " + lightClass} key={index} />;
        })}
      </div>
    );
  }
}
export default Star;
