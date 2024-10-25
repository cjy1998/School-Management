"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1月",
    income: 4000,
    expense: 2400,
  },
  {
    name: "2月",
    income: 3000,
    expense: 1398,
  },
  {
    name: "3月",
    income: 2000,
    expense: 9800,
  },
  {
    name: "4月",
    income: 2780,
    expense: 3908,
  },
  {
    name: "5月",
    income: 1890,
    expense: 4800,
  },
  {
    name: "6月",
    income: 2390,
    expense: 3800,
  },
  {
    name: "7月",
    income: 3490,
    expense: 4300,
  },
  {
    name: "8月",
    income: 2780,
    expense: 3908,
  },
  {
    name: "9月",
    income: 1890,
    expense: 4800,
  },
  {
    name: "10月",
    income: 2390,
    expense: 3800,
  },
  {
    name: "11月",
    income: 3490,
    expense: 4300,
  },
  {
    name: "12月",
    income: 3490,
    expense: 4300,
  },
];
const FinaceChart = () => {
  return (
    <div className="w-full h-full p-5 rounded-xl bg-white">
      {/* header */}
      {/* 标题 */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold">Finace</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "0px", paddingBottom: "20px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinaceChart;
