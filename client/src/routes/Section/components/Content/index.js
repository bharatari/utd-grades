import React from 'react';
import classes from './styles.scss';
import { Core, Graph } from 'components/';
import { Row, Col, Icon, Popover } from 'antd';
import { SectionCard } from '../';

export default class Content extends React.Component {
  transformData = (grades) => {
    let data = [];

    const colors = {
      'A': 'hsl(246, 70%, 50%)',
      'B': 'hsl(338, 70%, 50%)',
      'C': 'hsl(204, 70%, 50%)',
      'D': 'hsl(350, 70%, 50%)',
      'F': 'hsl(199, 70%, 50%)',
      'W': 'hsl(356, 70%, 50%)',
    };

    if (grades['A+']) {
      data.push({
        grade: 'A+',
        count: parseInt(grades['A+']),
        color: 'hsl(246, 70%, 50%)',
      });
    }

    if (grades['A']) {
      data.push({
        grade: 'A',
        count: parseInt(grades['A']),
        color: 'hsl(338, 70%, 50%)',
      });
    }

    if (grades['A-']) {
      data.push({
        grade: 'A-',
        count: parseInt(grades['A-']), 
        color: 'hsl(204, 70%, 50%)',
      });
    }

    if (grades['B+']) {
      data.push({
        grade: 'B+',
        count: parseInt(grades['B+']),
        color: 'hsl(350, 70%, 50%)',
      });
    }

    if (grades['B']) {
      data.push({
        grade: 'B',
        count: parseInt(grades['B']),
        color: 'hsl(199, 70%, 50%)',
      });
    }

    if (grades['B-']) {
      data.push({
        grade: 'B-',
        count: parseInt(grades['B-']),
        color: 'hsl(356, 70%, 50%)',
      });
    }

    if (grades['C+']) {
      data.push({
        grade: 'C+',
        count: parseInt(grades['C+']),
        color: '',
      });
    }

    if (grades['C']) {
      data.push({
        grade: 'C',
        count: parseInt(grades['C']),
        color: '',
      });
    }

    if (grades['C-']) {
      data.push({
        grade: 'C-',
        count: parseInt(grades['C-']),
        color: '',
      });
    }

    if (grades['D+']) {
      data.push({
        grade: 'D+',
        count: parseInt(grades['D+']),
        color: '',
      });
    }

    if (grades['D']) {
      data.push({
        grade: 'D',
        count: parseInt(grades['D']),
        color: '',
      });
    }

    if (grades['D-']) {
      data.push({
        grade: 'D-',
        count: parseInt(grades['D-']),
        color: '',
      });
    }

    if (grades['F']) {
      data.push({
        grade: 'F',
        count: parseInt(grades['F']),
        color: '',
      });
    }

    if (grades['W']) {
      data.push({
        grade: 'W',
        count: parseInt(grades['W']),
        color: '',
      });
    }

    return data;
  };
  render() {
    const otherSections = () => {
      if (this.props.otherSections) {
        return this.props.otherSections.map((section) => <SectionCard key={section.name} section={section} backgroundColor="darkgray" />)
      }
      
      return null;
    };

    return (
      <div>
        <Row>
          <h3 className={classes.header}>{this.props.section.course.prefix} {this.props.section.course.number}<span className={classes.section}>.{this.props.section.number}</span></h3>
          <h5 className={classes.subheader}>{this.props.section.professor.lastName}, {this.props.section.professor.firstName}</h5>
        </Row>

        <Row>
          <div className={classes.graphContainer}>
            <Graph type="bar" data={{ labels: ['A', 'B'], datasets: [{ backgroundColor: 'hsl(350, 70%, 50%)', data: [1,2] }]}} />
          </div>
        </Row>

        <Row className={classes.otherSectionsRow}>
          <p className={classes.otherSectionsHeader}>Other Sections</p>
          <div className={classes.sectionsContainer}>
            {otherSections()}
          </div>
        </Row>
      </div>
    );
  }
}
