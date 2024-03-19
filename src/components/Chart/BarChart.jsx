import React, { Component } from "react";
import Chart from "react-apexcharts";

class Bar extends Component {
  render() {
    const { data } = this.props; // Receive data as props

    const options = {
      chart: {
        id: "basic-bar",
        type: "bar", // Specify the chart type as bar
        horizontal: true
      },
      xaxis: {
        categories: data.categories // Use categories from props
      }
    };

    let series = [];

    if (Array.isArray(data.series[0])) {
      // If data.series contains multiple series
      series = data.series.map((seriesData, index) => ({
        name: data.seriesNames ? data.seriesNames[index] : `Series ${index + 1}`,
        data: seriesData
      }));
    } else {
      // If data.series contains a single series
      series = [
        {
          name: data.seriesName,
          data: data.series
        }
      ];
    }

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
