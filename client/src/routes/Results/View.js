import React from 'react';
import classes from './styles.scss';
import { Core, Form } from 'components/';
import { Content, List } from './components';
import { Button, Row, Col, Card, Icon, Popover, Spin, Input } from 'antd';
import queryUtils from 'utils/query';

export default class SectionView extends React.Component {
  componentDidMount() {
    this.props.actions.resetSections();
    this.props.actions.resetSection();

    this.init();
  }
  componentDidUpdate(prevProps) {
    this.init(prevProps);
  }
  init = (prevProps) => {
    if (!prevProps) {
      prevProps = {};
    }

    if (this.props.search) {
      if (this.props.search !== prevProps.search) {
        this.props.actions.fetchSections(this.props.search);
      }
    }

    if (this.props.sectionId) {
      if (this.props.sectionId !== prevProps.sectionId) {
        this.props.actions.fetchSection(this.props.sectionId);
      }
    }

    if (this.props.section && !prevProps.section) {      
      this.props.actions.fetchOtherSections({
        number: this.props.section.course.number,
        prefix: this.props.section.course.prefix,
      });
    }    
  };
  goHome = () => {
    this.props.history.push('/');
  };
  handleSubmit = (values) => {
    queryUtils.pushQueryParams(this.props.location, this.props.history, {
      search: values.search,
    });
  };
  handleClick = (id) => {
    queryUtils.pushQueryParams(this.props.location, this.props.history, {
      section: id,
    });
  };
  render() {
    const content = () => {
      if (this.props.section) {
        return <Content section={this.props.section} otherSections={this.props.otherSections} history={this.props.history} />;
      } else if (this.props.requestingSection) {
        return <Spin className={classes.spinner} />;
      } else {
        return (
          <div className={classes.emptyContainer}>
            <h2 className={classes.empty}>Nothing to see here, select a section!</h2>
          </div>
        );
      }
    };

    return (
      <Core>
        <Row className={classes.menu}>
          <Button className={classes.back} onClick={this.goHome} type="ghost" shape="circle" icon="home" size="large" />
          <a href="javascript:void(0)" onClick={this.goHome}><h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2></a>
        </Row>
        
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              <Form onSubmit={this.handleSubmit} />
            </Col>
          </Row>
          
          <div>
            <Row>
              <Col span="20" offset="2" className={classes.results}>         
                <Col span="6">
                  <List data={this.props.sections} onClick={this.handleClick} loading={this.props.requestingSections}
                    id={this.props.sectionId} />
                </Col>

                <Col span="18">
                  {content()}
                </Col>

                <Col lg={{ span: 12, offset: 6 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
                  
                </Col>
              </Col>
            </Row>
          </div>
        </div>
      </Core>
    );
  }
}
