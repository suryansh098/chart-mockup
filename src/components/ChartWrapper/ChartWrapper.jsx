import React from "react";
import "./ChartWrapper.css";

const ChartWrapper = (props) => {
  return (
    <div className="chart-wrapper">
      <h2>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
};

export default ChartWrapper;
