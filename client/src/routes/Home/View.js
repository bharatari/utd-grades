import React from 'react';
import classes from './styles.scss';
import { LinkCard } from './components';
import { Core, Form } from 'components/';
import { Row, Col, Card, Icon, Popover, Spin } from 'antd';
import queryUtils from 'utils/query';
import query from '../../utils/query';

export default class HomeView extends React.Component {
  state = {
    links: [
      { name: 'The Mercury', backgroundColor: '#393939', link: 'https://www.utdmercury.com' },
      { name: 'eLearning', backgroundColor: '#E98300', link: 'https://elearning.utdallas.edu' },
      { name: 'UTD Galaxy', backgroundColor: '#00A1DE', link: 'https://galaxy.utdallas.edu' },
      { name: 'Coursebook', backgroundColor: '#69BE28', link: 'https://coursebook.utdallas.edu' },
    ],
  };
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
          <Row className={classes.quickLinksContainer}>
            <Col xs={{ span: 18, offset: 3 }} sm={{ span: 18, offset: 3 }} span={12} offset={6}>
              <p className={classes.quickLinksHeader}>Quick Links</p>

              <div className={classes.quickLinkItems}> 
                {this.state.links.map((link) => <LinkCard key={link.name} {...link} />)}
                <LinkCard dummy />
                <LinkCard dummy />
              </div>
            </Col>
          </Row>
        </div>
      </Core>
    );
  }
}
