import React from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export default class SlideUp extends React.Component {
  state = {
    display: false,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ display: true }), this.props.startAt);
  }
  render() {
    const { key, children } = this.props;
    const { display } = this.state;

    return (
      <CSSTransition
        key={key}
        classNames={{
          appear: classes.slideUpEnter,
          appearActive: classes.slideUpEnterActive,
          enter: classes.slideUpEnter,
          enterActive: classes.slideUpEnterActive,
          exit: classes.slideUpExit,
          exitActive: classes.slideUpExitActive
        }}
        in={display}
        timeout={300}
        appear={true}
        unmountOnExit={true}>
        {children}
      </CSSTransition>
    );
  }
}
