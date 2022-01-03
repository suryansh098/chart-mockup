import React from "react";
import ReactApexChart from "react-apexcharts";

import data from "./RenewablePotential.json";

const BarGraph = () => {
  const FID = [];
  const Area_m2 = [];
  const SolCaMW = [];

  data.forEach((row) => {
    FID.push(row.FID);
    Area_m2.push(row.Area_m2);
    SolCaMW.push(row.SolCaMW);
  });

  const series = [
    {
      name: "Area_m2",
      data: Area_m2,
    },
    {
      name: "SolCaMW",
      data: SolCaMW,
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
      categories: FID,
      title: {
        text: "FID",
        style: {
          fontWeight: "600",
        },
      },
    },
    yaxis: [
      {
        seriesName: "Area_m2",
        decimalsInFloat: 0,
        title: {
          text: "Area_m2",
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
        seriesName: "SolCaMW",
        decimalsInFloat: 0,
        title: {
          text: "SolCaMW",
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
            let decimalValue = stringValue[1];
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
    <ReactApexChart options={options} series={series} type="bar" height={500} />
  );
};

export default BarGraph;
