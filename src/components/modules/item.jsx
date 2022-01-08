import React from "react";

// 検索結果ひとつひとつの要素
export default class Item extends React.Component {
  componentDidMount() {
    console.log(this.props.item);
  }

  render() {
    return (
      <li>
        <a href={this.props.item.trackViewUrl}>
          <div className="img">
            <img src={this.props.item.artworkUrl100.replace('100x100bb.jpg', '300x300bb.jpg')} alt="artwork" />
          </div>
          <p>{this.props.item.trackCensoredName}</p>
        </a>
      </li>
    );
  }
}
