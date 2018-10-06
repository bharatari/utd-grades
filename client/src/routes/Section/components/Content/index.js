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
      });
    }

    if (grades['A']) {
      data.push({
        grade: 'A',
        count: parseInt(grades['A']), 
      });
    }

    if (grades['A-']) {
      data.push({
        grade: 'A-',
        count: parseInt(grades['A-']), 
      });
    }

    if (grades['B+']) {
      data.push({
        grade: 'B+',
        count: parseInt(grades['B+']), 
      });
    }

    if (grades['B']) {
      data.push({
        grade: 'B',
        count: parseInt(grades['B']), 
      });
    }

    if (grades['B-']) {
      data.push({
        grade: 'B-',
        count: parseInt(grades['B-']), 
      });
    }

    if (grades['C+']) {
      data.push({
        grade: 'C+',
        count: parseInt(grades['C+']), 
      });
    }

    if (grades['C']) {
      data.push({
        grade: 'C',
        count: parseInt(grades['C']), 
      });
    }

    if (grades['C-']) {
      data.push({
        grade: 'C-',
        count: parseInt(grades['C-']), 
      });
    }

    if (grades['D+']) {
      data.push({
        grade: 'D+',
        count: parseInt(grades['D+']), 
      });
    }

    if (grades['D']) {
      data.push({
        grade: 'D',
        count: parseInt(grades['D']), 
      });
    }

    if (grades['D-']) {
      data.push({
        grade: 'D-',
        count: parseInt(grades['D-']), 
      });
    }

    if (grades['F']) {
      data.push({
        grade: 'F',
        count: parseInt(grades['F']), 
      });
    }

    if (grades['W']) {
      data.push({
        grade: 'W',
        count: parseInt(grades['W']), 
      });
    }

    return data;
  };
  render() {
    return (
      <div>
        <p>{this.props.section.number}</p>

        <Bar
          width={900}
          height={500}
          margin={{
            top: 60,
            right: 80,
            bottom: 60,
            left: 80
          }}
          data={this.transformData(this.props.section.grades)}
          indexBy="grade"
          keys={[
            'count',
          ]}
          padding={0.2}
          labelTextColor="inherit:darker(1.4)"
          labelSkipWidth={16}
          labelSkipHeight={16}

          
          theme={{tooltip: {container: {background: '#333'}}}}
        />
      </div>
    );
  }
}
