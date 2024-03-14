import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      chartOptions: props.chartOptions,
    };
  }

  render() {
    const { chartData, chartOptions } = this.props;
    const labels = chartData.map((dataPoint) => dataPoint.name); // Extract labels from data

    return (
      <div>
        <Chart
          options={chartOptions}
          series={chartData}
          type="donut"
          width="100%"
          height="100%"
        />
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {labels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DonutChart;
