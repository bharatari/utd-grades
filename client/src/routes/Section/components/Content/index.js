import React from 'react';
import classes from './styles.scss';
import { Core } from 'components/';
import { Row, Col, Card, Icon, Popover } from 'antd';
import { Bar } from '@nivo/bar';

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
    return (
      <div>
        <Row>
          <h3 className={classes.header}>{this.props.section.course.prefix} {this.props.section.course.number}<span className={classes.section}>.{this.props.section.number}</span></h3>
          <h5 className={classes.subheader}>{this.props.section.professor.lastName}, {this.props.section.professor.firstName}</h5>
        </Row>

        <Row>
          <div className={classes.graphContainer}>
            <Bar
              defs={[
                {
                  "id": "dots",
                  "type": "patternDots",
                  "background": "inherit",
                  "color": "#38bcb2",
                  "size": 4,
                  "padding": 1,
                  "stagger": true
                },
                {
                  "id": "lines",
                  "type": "patternLines",
                  "background": "inherit",
                  "color": "#eed312",
                  "rotation": -45,
                  "lineWidth": 6,
                  "spacing": 10
                }
              ]}
              fill={[
                {
                  "match": {
                      "grade": "A"
                  },
                  "id": "dots"
                },
                {
                  "match": {
                      "grade": "B"
                  },
                  "id": "lines"
                }
              ]}
              width={800}
              height={500}
              margin={{
                top: 60,
                right: 80,
                bottom: 60,
                left: 80
              }}
              data={this.transformData(this.props.section.grades)}
              indexBy="grade"
              colors="nivo"
              colorBy="color"
              keys={[
                'count',
              ]}
              padding={0.2}
              labelTextColor="inherit:darker(1.4)"
              labelSkipWidth={16}
              labelSkipHeight={16}
              animate={true}
              isInteractive={false}
              theme={{tooltip: {container: {background: '#333'}}}}
            />
          </div>
        </Row>

        <Row className={classes.otherSectionsRow}>
          <p className={classes.otherSectionsHeader}>Other Sections</p>
        </Row>
      </div>
    );
  }
}
