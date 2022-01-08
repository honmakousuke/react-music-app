import React from "react";
import Item from "./item";

// 検索結果の画面
export default class Result extends React.Component {
  render() {
    return(
      <ul className="result_container">
        {this.props.items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ul>
    );
  }
}
