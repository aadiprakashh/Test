import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

// Sample user data (This could come from an API)
const userData = {
  user1: [10, 20, 30, 40, 50],
  user2: [15, 25, 35, 45, 55],
  user3: [5, 15, 25, 35, 45],
};

const users = Object.keys(userData);

const DynamicEChart = () => {
  const [selectedUser, setSelectedUser] = useState("user1");

  // Function to generate ECharts option
  const getOption = () => ({
    title: { text: "Dynamic User Chart" },
    tooltip: {},
    xAxis: { type: "category", data: ["A", "B", "C", "D", "E"] },
    yAxis: { type: "value" },
    series: [
      {
        data: userData[selectedUser],
        type: "bar",
      },
    ],
  });

  return (
    <div>
      <h3>Select User</h3>
      <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        {users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>

      {/* Chart Component */}
      <ReactECharts option={getOption()} style={{ height: 400 }} />
    </div>
  );
};

export default DynamicEChart;
