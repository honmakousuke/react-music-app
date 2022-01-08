import React from "react";

// 通信の失敗、APIのリクエストの失敗などで画面に何も出なくなるのではなくエラー画面を出力
export default class ErrorPage extends React.Component {
  render() {
    return <h1 className="error-state-text">エラーが発生しました。</h1>;
  }
}
