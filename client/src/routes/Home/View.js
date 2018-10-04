import React from 'react';
import classes from './styles.scss';
import { Form, LinkCard } from './components';
import { Row, Col, Card } from 'antd';

export default class HomeView extends React.Component {
  state = {
    links: [
      { name: 'The Mercury', backgroundColor: '#393939', link: 'https://www.utdmercury.com' },
      { name: 'eLearning', backgroundColor: '#F3A731' },
      { name: 'UTD Galaxy', backgroundColor: '#5C95E0' },
      { name: 'Coursebook', backgroundColor: '#079885' }
    ],
  };
  render() {
    return (
      <div className={classes.background}>
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
              <p className={classes.description}>See how students did in any given class. And it's <strong>free, forever.</strong></p>
              <Form />
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
      </div>
    );
  }
}
