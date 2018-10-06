import React from 'react';
import classes from './styles.scss';
import { Core } from 'components/';
import { Content } from './components';
import { Row, Col, Card, Icon, Popover } from 'antd';

export default class SectionView extends React.Component {
  componentDidMount() {
    this.props.actions.fetchSection(this.props.match.params.id);
  }
  render() {
    return (
      <Core>
        <Row className={classes.menu}>
          <button className={classes.back}>
            <Icon type="arrow-left" style={{ fontSize: '24px' }} />
          </button>
          <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
        </Row>
        
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              { this.props.section ? <Content section={this.props.section} /> : null }
            </Col>
          </Row>
        </div>
      </Core>
    );
  }
}
