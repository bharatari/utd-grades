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
        <div className={classes.background}>
          <div className={classes.content}>
            <Row>
              <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
                <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
                { this.props.section ? <Content section={this.props.section} /> : null }
              </Col>
            </Row>
          </div>
        </div>
      </Core>
    );
  }
}
