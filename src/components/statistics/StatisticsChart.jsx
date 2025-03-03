import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const data = [
  { day: "Mon", value: 20, maxValue: 100 },
  { day: "Tue", value: 30, maxValue: 100 },
  { day: "Wed", value: 20, maxValue: 100 },
  { day: "Thu", value: 27, maxValue: 100 },
  { day: "Fri", value: 18, maxValue: 100 },
  { day: "Sat", value: 23, maxValue: 100 },
  { day: "Sun", value: 34, maxValue: 100 },
];

const StatisticsChart = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");
  
  return (
    <div className="mt-[120px] relative bg-white rounded-[30px] shadow p-6">

      <div className="flex justify-between items-center ">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Expense</h2>
          <p className="flex flex-row text-2xl font-bold text-gray-900">
            <span className="mr-1 text-gray-600">-$</span>127,96
          </p>
        </div>
        <select className="px-4 py-2 bg-gray-100 text-gray-700 rounded-[25px] hover:bg-gray-200 transition-colors">
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      {/* statistics */}
      <div >
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barSize={40}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => {
                const isActive = payload.value === selectedDay;
                return (
                  <text
                    x={x}
                    y={y + 20}
                    textAnchor="middle"
                    fontSize={12}
                    fontWeight={isActive ? "bold" : "normal"}
                    fill={isActive ? "#A3E635" : "#bbb"}
                  >
                    {payload.value}
                  </text>
                );
              }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[20, 20, 20, 20]} background={{ fill: '#EDF1F2' , radius: [20, 20, 20, 20] }}  >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.day}`}
                  fill={entry.day === selectedDay ? "#A3E635" : "#E5E7EB"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Income and Expense */}
      <div >
        <div className="flex justify-between">
          {/* Income */}
          <div className="flex-1 bg-gray-100 p-4 rounded-[30px] mr-2">
            <div className="flex items-center gap-2">
              <FaArrowUp className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-gray-500">Income</div>
                <div className="text-xl font-bold text-green-500">$494.54</div>
              </div>
            </div>
          </div>

          {/* Expense */}
          <div className="flex-1 bg-gray-100 p-4 rounded-[30px] ml-2">
            <div className="flex items-center gap-2">
              <FaArrowDown className="w-5 h-5 text-red-500" />
              <div>
                <div className="text-sm text-gray-500">Expense</div>
                <div className="text-xl font-bold text-red-500">$127.96</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StatisticsChart;