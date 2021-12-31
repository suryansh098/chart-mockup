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
    },
    yaxis: [
      {
        seriesName: "Area_m2",
        title: {
          text: "Area_m2",
        },
        axisTicks: {
          show: true,
        },
      },
      {
        opposite: true,
        seriesName: "SolCaMW",
        title: {
          text: "SolCaMW",
        },

        axisTicks: {
          show: true,
        },
      },
    ],
    fill: {
      opacity: 1,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={500} />
  );
};

export default BarGraph;
