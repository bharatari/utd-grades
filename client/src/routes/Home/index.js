import React from 'react';
import classes from './styles.scss';
import { Core, Form } from 'components/';
import { Row, Col } from 'antd';
import queryUtils from 'utils/query';

export default class HomeView extends React.Component {
  handleSearch = () => {
    this.props.actions.submit('homeForm');
  };
  handleSubmit = (values) => {
    queryUtils.pushQueryParamsToURL(this.props.location, this.props.history, {
      search: values.search
    }, '/app/results');
  };
  render() {
    return (
      <Core> 
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
              
              <p className={classes.description}>See how students did in any given class. And it's <strong>free, forever.</strong></p>
              <Form onSubmit={this.handleSubmit} onSearch={this.handleSearch} />
            </Col>
          </Row>
        </div>
      </Core>
    );
  }
}
