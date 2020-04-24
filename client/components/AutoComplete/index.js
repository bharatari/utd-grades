import React from 'react'
import { AutoComplete as Complete } from 'antd';

const Option = Complete.Option;

export default class AutoComplete extends React.Component {
  handleSearch = (value) => {
    this.props.onSearch(value);
  };
  handleChange = (value) => {
    this.props.onChange(value);
    this.props.onFocus(value);
    this.props.onBlur(value);
  };
  render() {
    const { data, placeholder, value, onSelect } = this.props;

    let children = null;

    if (data) {
      children = data.map((object) => {
        return <Option key={object[this.props.uniqueKey]}>{object[this.props.labelKey]}</Option>;
      });
    }

    return (
      <Complete className={this.props.classes} size="large" value={value} dataSource={data}
        children={children} onSearch={this.handleSearch} placeholder={placeholder} onChange={this.handleChange}
        onSelect={onSelect} />
    );
  }
}
