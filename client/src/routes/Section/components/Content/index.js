import React from 'react';
import classes from './styles.scss';
import { Core, Graph } from 'components/';
import { Row, Col, Icon, Popover, Spin } from 'antd';
import { SectionCard } from '../';
import _ from 'lodash';
import general from 'utils/general';

export default class Content extends React.Component {
  transformData = (grades) => {
    const objectArray = general.convertAssociatedArrayToObjectArray(grades);
    const sortedGrades = general.sortByGrades(objectArray);
    const { keys, values } = general.splitData(sortedGrades);

    console.log(sortedGrades);

    return { keys, values };
  };
  render() {
    const otherSections = () => {
      if (this.props.otherSections) {
        return this.props.otherSections.map((section) => <SectionCard key={section.id} section={section} backgroundColor="rgb(57, 57, 57)" history={this.props.history} />)
      }
      
      return <Spin />;
    };

    const { keys, values } = this.transformData(this.props.section.grades);

    return (
      <div>
        <Row>
          <h3 className={classes.header}>{this.props.section.course.prefix} {this.props.section.course.number}<span className={classes.section}>.{this.props.section.number}</span></h3>
          <h5 className={classes.subheader}>{this.props.section.professor.lastName}, {this.props.section.professor.firstName}</h5>
        </Row>

        <Row>
          <div className={classes.graphContainer}>
            <Graph type="bar" data={{ labels: keys, datasets: [{ backgroundColor: 'hsl(350, 70%, 50%)', data: values }]}}
              options={{ legend: { display: false } }} />
          </div>
        </Row>

        <Row className={classes.otherSectionsRow}>
          <p className={classes.otherSectionsHeader}>Other Sections</p>
          <div className={classes.sectionsContainer}>
            {otherSections()}
            <SectionCard dummy />
            <SectionCard dummy />
            <SectionCard dummy />
          </div>
        </Row>
      </div>
    );
  }
}
