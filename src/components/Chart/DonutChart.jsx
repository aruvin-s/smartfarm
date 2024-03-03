import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      chartOptions: props.chartOptions,
    };
  }

  render() {
    const { chartData, chartOptions } = this.props;
    return (
      <Chart
        options={chartOptions}
        series={chartData}
        type="donut"
        width="100%"
        height="100%"
      />
    );
  }
}

export default Donut;
