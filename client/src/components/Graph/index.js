import React from 'react';
import classes from './styles.scss';
import Chart from 'chart.js';

export default class Graph extends React.Component {
  componentDidMount() {
    this.initializeChart(this.props);
  }
  componentWillReceiveProps(nextProps) {
    //this.destroyChart();
    //this.initializeChart(nextProps);
  }
  componentWillUnmount() {
    this.destroyChart();
  }
  getChart = () => {
    return this.chart;
  };
  destroyChart = () => {
    this.chart && this.chart.destroy();
  };
  initializeChart = (props) => {
    const { data, options, type } = props;
    const ctx = this.refs['canvas'].getContext('2d');

    this.chart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    });
  };
  render() {
    return (
      <canvas ref='canvas' />
    );
  }
}
