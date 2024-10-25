"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 4000,
    absent: 2400,
  },
  {
    name: "Tue",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Wed",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Thu",
    present: 3000,
    absent: 1398,
  },
  {
    name: "Fri",
    present: 3000,
    absent: 1398,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-full p-5 rounded-xl bg-white">
      {/* header */}
      {/* 标题 */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex gap-1 mt-5 mb-10">
        <div className="w-5 h-5 bg-lamaSky rounded-full" />
        <h2 className="font-bold text-lamaSky">present</h2>
        <div className="w-5 h-5 bg-lamaYellow rounded-full" />
        <h2 className="font-bold text-lamaYellow">absent</h2>
      </div>
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
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
            {/* <Legend /> */}
            <Bar dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
            <Bar dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
