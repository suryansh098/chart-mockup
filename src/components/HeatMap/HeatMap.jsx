import React from "react";
import ReactApexChart from "react-apexcharts";
import jsonData from "./ForecastPVYield.json";

const HeatMap = () => {
  const dateArray = jsonData[0][""];
  const data = jsonData.slice(1);

  const zip = (a, b) => a.map((k, i) => ({x: k, y: +b[i]}));

  const finalData = data.map(currData => {
    const time = Object.keys(currData)[0];
    const values = currData[time];

    return {
      name: time,
      data: zip(dateArray, values)
    }
  });

  // console.log(finalData);

  const options = {
    chart: {
      height: 800,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#22BC22"],
  };

  return (
    <ReactApexChart
      options={options}
      series={finalData}
      type="heatmap"
      height={800}
    />
  );
};

export default HeatMap;
