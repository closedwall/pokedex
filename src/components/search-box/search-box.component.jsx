import React, { Component } from "react";
export default class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
