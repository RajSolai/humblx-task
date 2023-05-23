/* eslint-disable react/prop-types */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartComponent = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="okayCount" fill="#8884d8" />
    </BarChart>
  );
};

export default ChartComponent;
