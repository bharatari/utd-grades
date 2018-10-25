import React from 'react';
import classes from './styles.scss';
import { Card } from 'antd';
import classNames from 'classnames';
import { SlideUp } from 'components/Animations';

const dummyItem = classNames(
  classes.card,
  classes.dummy
);

export default class LinkCard extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    window.location.href = this.props.link;
  };
  render() {
    const { name, backgroundColor, icon, link, dummy } = this.props;

    if (dummy) {
      return (
        <div className={dummyItem}></div>
      );
    }

    return (
      <SlideUp {...this.props} startAt={100}>
        <div className={classes.card} style={{ backgroundColor }} onClick={this.handleClick}>
          <p className={classes.name}>{name}</p>
        </div>
      </SlideUp>
    );
  }
}
