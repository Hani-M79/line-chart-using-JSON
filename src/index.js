import React from "react";
import ReactDOM from "react-dom/client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.css";

class Index extends React.Component {
  render() {
    const params = {
      title: "My Chart",
      type: "line",
      data: [
        { year: "1992", count: 10 },
        { year: "1993", count: 11 },
        { year: "1994", count: 12 },
        { year: "1995", count: 13 },
        { year: "1996", count: 14 },
        { year: "1997", count: 15 },
      ],
      options: {
        xAxis: "year",
        yAxis: "count",
      },
    };
    return (
      <div>
        <Chart params={params}></Chart>
      </div>
    );
  }
}

class Chart extends React.Component {
  render() {
    const { params } = this.props;
    const { data, title, options, type } = params;
    const seriesData = [];
    const categories = [];
    for (let i in data) {
      categories.push(data[i][options.xAxis]);
      seriesData.push(data[i][options.yAxis]);
    }

    console.log(categories);
    console.log(seriesData);

    const chartOptions = {
      chart: {
        type: type,
        backgroundColor: "transparent",
      },
      title: {
        text: title,
        style: {
          color: "white",
        },
      },
      xAxis: {
        categories: categories,
        labels: {
          style: {
            color: "white",
          },
        },
      },
      yAxis: {
        style: {
          color: "white",
        },
      },
      series: [
        {
          data: seriesData,
          color: "pink",
        },
      ],
    };
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{
            style: { height: "600px", width: "100%" },
          }}
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
