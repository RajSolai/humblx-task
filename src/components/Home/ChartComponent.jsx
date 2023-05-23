/* eslint-disable react/prop-types */
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartComponent = ({ data, x, y }) => {
  const width = window.innerWidth;
  const isMobile = width <= 500;
  return (
    <BarChart width={isMobile ? width-60 :width / 2} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={x} />
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey={y} fill="#8884d8" />
    </BarChart>
  );
};

export default ChartComponent;
