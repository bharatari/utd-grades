import React from 'react';
import ReactDOM from 'react-dom';
import classes from './styles.scss';
import classNames from 'classnames';
import { List, Spin, Icon, Popover } from 'antd';
import general from 'utils/general';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class ResultsList extends React.Component {
  render() {
    const popover = (
      <div className={classes.popover}>
        <p>Because of FERPA restrictions, grade data for certain classes — in particular, classes with a small number of students — is unavailable.</p>
      </div>
    );

    const empty = (
      <div className={classes.emptyContainer}>
        <Icon className={classes.icon} type="frown" theme="twoTone" />
        <p className={classes.error}>We weren't able to find that. Try searching for something else!</p>
        <Popover content={popover} className={classes.hint} placement="bottom">
          <span style={{ textAlign: 'center' }}>
            Still can't find what you're looking for? <span style={{ textDecoration: 'underline' }}>Learn more.</span>
          </span>
        </Popover>
      </div>
    );

    if (this.props.data) {
      if (this.props.data.length < 1) {
        return empty;
      } else {
        return (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 8,
              className: classes.pagination,
            }}
            dataSource={this.props.data}
            renderItem={item => {
              const itemClasses = classNames(
                classes.item,
                { [classes.selected]: item.id == this.props.id }
              );
  
              const { keys, values } = general.splitData(general.convertAssociatedArrayToObjectArray(item.grades));
              const total = _.sum(values);
              
              return (
                <List.Item
                  key={item.id}
                  className={itemClasses}
                  actions={[<IconText type="user" text={total} />]}
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
      }
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
