import React from "react";
import {
  Chart,
  Axis,
  Tooltip,
  Coordinate,
  Legend,
  Interval,
} from "bizcharts";
import DataSet from "@antv/data-set";
import data from "./RenewablePotential.json";

const BarGraph = () => {
  // const data = [
  //   {
  //     label: "Monday",
  //     Area_m2: 2800,
  //     SolCaMW: 2260,
  //   },
  //   {
  //     label: "Tuesday",
  //     Area_m2: 1800,
  //     SolCaMW: 1300,
  //   },
  //   {
  //     label: "Wednesday",
  //     Area_m2: 950,
  //     SolCaMW: 900,
  //   },
  //   {
  //     label: "Thursday",
  //     Area_m2: 500,
  //     SolCaMW: 390,
  //   },
  //   {
  //     label: "Friday",
  //     Area_m2: 170,
  //     SolCaMW: 100,
  //   },
  // ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: "fold",
    fields: ["Area_m2", "SolCaMW"],
    key: "type",
    value: "value",
  });
  console.log(dv.rows);

  const scale = {
    Area_m2: {
      alias: 'Area_m2',
      tickCount: 5,
      min: 0,
      type: 'linear-strict'
    },
    SolCaMW: {
      alias: 'SolCamW',
      tickCount: 5,
      min: 0,
      type: 'linear-strict'
    }
  }
  return (
    <Chart height={400} data={dv.rows} autoFit>
      <Legend />
      <Coordinate actions={[["scale", 1, -1], ["transpose"]]} />
      <Axis
        name="FID"
        label={{
          offset: 12,
        }}
      />
      <Axis name="value" position={"right"} />
      {/* <Axis name="value2" position={"left"} /> */}
      <Tooltip />
      <Interval
        position="FID*value"
        color={"type"}
        adjust={[
          {
            type: "dodge",
            marginRatio: 1 / 32,
          },
        ]}
      />
    </Chart>
  );
};

export default BarGraph;
