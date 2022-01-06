import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

import AxisValueSelector from "../AxisValueSelector/AxisValueSelector";
import data from "./RenewablePotential.json";

const BarGraph = () => {
  const [xAxis, setXAxis] = useState("FID");
  const [yAxis1, setYAxis1] = useState("Area_m2");
  const [yAxis2, setYAxis2] = useState("SolCaMW");

  const series = [
    {
      name: yAxis1,
      data: data[yAxis1],
    },
    {
      name: yAxis2,
      data: data[yAxis2],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 500,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: data[xAxis],
      title: {
        text: xAxis,
        style: {
          fontWeight: "600",
        },
      },
    },
    yaxis: [
      {
        seriesName: yAxis1,
        decimalsInFloat: 0,
        title: {
          text: yAxis1,
          style: {
            fontWeight: "600",
          },
        },
        axisTicks: {
          show: true,
        },
        labels: {
          formatter: function (value) {
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
          },
        },
      },
      {
        opposite: true,
        seriesName: yAxis2,
        decimalsInFloat: 0,
        title: {
          text: yAxis2,
          style: {
            fontWeight: "600",
          },
        },

        axisTicks: {
          show: true,
        },
      },
    ],
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: [
        {
          formatter: function (value) {
            let stringValue = value.toString().split(".");
            let originalValue = stringValue[0].replace(
              /(\d)(?=(\d{3})+$)/g,
              "$1,"
            );
            let decimalValue = stringValue[1] ? stringValue[1] : "00";
            return `${originalValue}.${decimalValue}`;
          },
        },
        {
          formatter: function (value) {
            return value;
          },
        },
      ],
    },
  };

  return (
    <div>
      <AxisValueSelector
        xAxis={xAxis}
        setXAxis={setXAxis}
        yAxis1={yAxis1}
        setYAxis1={setYAxis1}
        yAxis2={yAxis2}
        setYAxis2={setYAxis2}
      />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default BarGraph;
