import React from 'react';
import classes from './styles.scss';
import { Core } from 'components/';
import { Content } from './components';
import { Button, Row, Col, Card, Icon, Popover, Spin } from 'antd';

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
  goHome = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <Core>
        <Row className={classes.menu}>
          <Button className={classes.back} onClick={this.goHome} type="ghost" shape="circle" icon="home" size="large" />
          <a href="javascript:void(0)" onClick={this.goHome}><h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2></a>
        </Row>
        
        <div className={classes.content}>
          <Row>
            <Col lg={{ span: 12, offset: 6 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
              {
                this.props.section
                ? <Content section={this.props.section} otherSections={this.props.otherSections} history={this.props.history} />
                : <Spin className={classes.spinner} /> 
              }
            </Col>
          </Row>
        </div>
      </Core>
    );
  }
}
