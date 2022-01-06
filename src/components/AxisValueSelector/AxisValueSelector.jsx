import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./AxisValueSelector.css";

const allMenuItems = [
  {
    key: "FID",
    value: "FID",
  },
  {
    key: "Area_m2",
    value: "Area in m^2",
  },
  {
    key: "Area_Ha",
    value: "Area in hectare",
  },
  {
    key: "Slope_Mean",
    value: "Slope Mean",
  },
  {
    key: "Wind45_Mean",
    value: "Wind45 Mean",
  },
  {
    key: "SolCaMW",
    value: "Solar Ca MW",
  },
  {
    key: "WindCaMW",
    value: "Wind Ca MW",
  },
];

const AxisValueSelector = (props) => {
  const { xAxis, yAxis1, yAxis2, setXAxis, setYAxis1, setYAxis2 } = props;
  const [xAxisMenus, setXAxisMenus] = useState(
    allMenuItems.filter((item) => item.key !== yAxis1 && item.key !== yAxis2)
  );
  const [yAxis1Menus, setYAxis1Menus] = useState(
    allMenuItems.filter((item) => item.key !== xAxis && item.key !== yAxis2)
  );
  const [yAxis2Menus, setYAxis2Menus] = useState(
    allMenuItems.filter((item) => item.key !== xAxis && item.key !== yAxis1)
  );

  const changeXAxis = (e) => {
    setXAxis(e.key);
    setYAxis1Menus(
      allMenuItems.filter((item) => item.key !== e.key && item.key !== yAxis2)
    );
    setYAxis2Menus(
      allMenuItems.filter((item) => item.key !== e.key && item.key !== yAxis1)
    );
  };

  const changeYAxis1 = (e) => {
    setYAxis1(e.key);
    setXAxisMenus(
      allMenuItems.filter((item) => item.key !== e.key && item.key !== yAxis2)
    );
    setYAxis2Menus(
      allMenuItems.filter((item) => item.key !== xAxis && item.key !== e.key)
    );
  };

  const changeYAxis2 = (e) => {
    setYAxis2(e.key);
    setXAxisMenus(
      allMenuItems.filter((item) => item.key !== yAxis1 && item.key !== e.key)
    );
    setYAxis1Menus(
      allMenuItems.filter((item) => item.key !== xAxis && item.key !== e.key)
    );
  };

  const MenuX = (
    <Menu onClick={changeXAxis}>
      {xAxisMenus.map((item) => (
        <Menu.Item key={item.key}>{item.value}</Menu.Item>
      ))}
    </Menu>
  );

  const MenuY1 = (
    <Menu onClick={changeYAxis1}>
      {yAxis1Menus.map((item) => (
        <Menu.Item key={item.key}>{item.value}</Menu.Item>
      ))}
    </Menu>
  );

  const MenuY2 = (
    <Menu onClick={changeYAxis2}>
      {yAxis2Menus.map((item) => (
        <Menu.Item key={item.key}>{item.value}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <h3>X-Axis</h3>
        <Dropdown.Button icon={<DownOutlined />} overlay={MenuX}>
        {xAxis}
        </Dropdown.Button>
      </div>
      <div className="dropdown">
        <h3>Y-Axis (left)</h3>
        <Dropdown.Button icon={<DownOutlined />} overlay={MenuY1}>
        {yAxis1}
        </Dropdown.Button>
      </div>
      <div className="dropdown">
        <h3>Y-Axis (right)</h3>
        <Dropdown.Button icon={<DownOutlined />} overlay={MenuY2}>
        {yAxis2}
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default AxisValueSelector;
