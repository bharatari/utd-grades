import React from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import { List, Spin, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class ResultsList extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}
          dataSource={this.props.data}
          renderItem={item => {
            const itemClasses = classNames(
              classes.item,
              { [classes.selected]: item.id == this.props.id }
            );
            console.log(this.props.id)
            console.log(item.id)

            return (
              <List.Item
                key={item.id}
                className={itemClasses}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                onClick={() => this.props.onClick(item.id)}>
                <List.Item.Meta
                  title={<a href="javascript:void(0)">{item.course.prefix} {item.course.number}.{item.number}</a>}
                  description={`${item.professor.lastName}, ${item.professor.firstName} - ${item.course.semester.name}`}
                />
              </List.Item>
            );
          }}
        />
      );
    } else if (this.props.loading) {
      return (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}>
          <List.Item className={classes.loadingItem}>
            <Spin />
          </List.Item>
        </List>
      );
    } else {
      return (
        <div>
          <p>Search for something!</p>
        </div>
      );
    }
  }
}
