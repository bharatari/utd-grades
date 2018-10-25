import React from 'react';
import classes from './styles.scss';
import { Core } from 'components/';
import { Content } from './components';
import { Row, Col, Card, Icon, Popover, Spin } from 'antd';

export default class SectionView extends React.Component {
  componentDidMount() {
    this.props.actions.resetSection();
    this.props.actions.resetOtherSections();

    this.props.actions.fetchSection(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.section && !prevProps.section) {
      this.props.actions.fetchOtherSections({
        number: this.props.section.course.number,
        prefix: this.props.section.course.prefix,
      });
    }
    
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.init();
    }
  }
  init = () => {
    this.props.actions.resetSection();
    this.props.actions.resetOtherSections();

    this.props.actions.fetchSection(this.props.match.params.id);
  };
  goBack = () => {
    this.props.history.replace('/');
  };
  render() {
    return (
      <Core>
        <Row className={classes.menu}>
          <button className={classes.back}>
            <Icon type="arrow-left" style={{ fontSize: '24px' }} onClick={this.goBack} />
          </button>
          <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
        </Row>
        
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 12, offset: 6 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              { this.props.section ? <Content section={this.props.section} otherSections={this.props.otherSections} history={this.props.history} /> : <Spin /> }
            </Col>
          </Row>
        </div>
      </Core>
    );
  }
}
