import React from 'react';
import classes from './styles.scss';
import { Form, LinkCard } from './components';
import { Row, Col, Card, Icon, Popover } from 'antd';

export default class HomeView extends React.Component {
  state = {
    links: [
      { name: 'The Mercury', backgroundColor: '#393939', link: 'https://www.utdmercury.com' },
      { name: 'eLearning', backgroundColor: '#F3A731', link: 'https://elearning.utdallas.edu' },
      { name: 'UTD Galaxy', backgroundColor: '#5C95E0', link: 'https://galaxy.utdallas.edu' },
      { name: 'Coursebook', backgroundColor: '#079885', link: 'https://coursebook.utdallas.edu' },
    ],
  };
  render() {
    const donors = (
      <div style={{ width: '300px' }}>
        <p>Thank you to the following people for donating and making this possible (in order of most monetary support): Anthony-Tien Huynh, Adam Butcher, Paul Denino, Thomas Sowders, Xavier Brown, Enza Denino, David Garvin, Alastair Feille, Andrew Vaccaro and other anonymous donors.</p>      
      </div>
    );

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
        <div className={classes.footer}>
          <p>Built with <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> by <a href="https://www.acmutd.co">ACM Labs</a> and powered <Icon type="thunderbolt" theme="twoTone" twoToneColor="#ffcc00" /> by <a href="https://www.utdmercury.com">The Mercury</a>.</p>
          <p>Designed by Bharat Arimilli. Thanks to Garrett Gu, Jeffrey Wang, Joseph Wickline and our <Popover content={donors}><span style={{ textDecoration: 'underline' }}>donors</span>.</Popover></p>
        </div>
      </div>
    );
  }
}
