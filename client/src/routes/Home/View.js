import React from 'react';
import classes from './styles.scss';
import { Form, LinkCard } from './components';
import { Core } from 'components/';
import { Row, Col, Card, Icon, Popover } from 'antd';

export default class HomeView extends React.Component {
  state = {
    links: [
      { name: 'The Mercury', backgroundColor: '#393939', link: 'https://www.utdmercury.com' },
      { name: 'eLearning', backgroundColor: '#E98300', link: 'https://elearning.utdallas.edu' },
      { name: 'UTD Galaxy', backgroundColor: '#00A1DE', link: 'https://galaxy.utdallas.edu' },
      { name: 'Coursebook', backgroundColor: '#69BE28', link: 'https://coursebook.utdallas.edu' },
    ],
  };
  handleSearch = (search) => {
    this.props.actions.fetchSections(search);
  };
  handleSubmit = (values) => {
    this.props.history.push(`/app/section/${values.id}`)
  };
  render() {
    return (
      <Core> 
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              <h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2>
              <p className={classes.description}>See how students did in any given class. And it's <strong>free, forever.</strong></p>
              <Form onSearch={this.handleSearch} sections={this.props.sections} onSubmit={this.handleSubmit} />
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
