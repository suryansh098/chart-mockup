import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "./AnnualElectricity.json";

const LineChart = () => {
  const keys = Object.keys(data).filter((key) => key !== "");

  const series = keys.map((key) => ({
    name: key,
    data: data[key],
  }));

  const categories = data[""];

  const options = {
    chart: {
      type: "line",
      height: 500,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      opacity: 0.8,
      type: "solid",
    },
    stroke: {
      show: true,
      curve: "straight",
      width: 2,
    },
    markers: {
      size: 4,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      categories,
      title: {
        text: "Years",
        style: {
          fontSize: "12px",
          fontFamily: "Helvetica",
          fontWeight: "500",
          color: "#555",
        },
      },
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: "Electricity Consumption (kWh)",
        style: {
          fontSize: "12px",
          fontFamily: "Helvetica",
          fontWeight: "500",
          color: "#555",
        },
      },
      axisTicks: {
        show: true,
      },
      labels: {
        formatter: function (value) {
          return `${value
            .toFixed(0)
            .toString()
            .replace(/(\d)(?=(\d{3})+$)/g, "$1,")} kWh`;
        },
      },
    },
  };

  return <ReactApexChart options={options} series={series} height={500} />;
};

export default LineChart;
