import React from "react";

// 検索にひとつも出なかったときの画面
export default class NoResult extends React.Component {
  render() {
    return <h1 className="no_result_text">検索結果はありません。</h1>;
  }
}
