import { useState } from "react";
import doctor from "../../assets/img/user-1.png";
import ReactECharts from "echarts-for-react";

const Admin = () => {
  const [selectedRevenueOption, setSelectedRevenueOption] =
    useState("Last 7 days");
  const [selectedAppointmentOption, setSelectedAppointmentOption] =
    useState("By Treatment");

  const revenueData = {
    "Last 7 days": [400, 300, 500, 200, 700, 400, 600],
    "Last 30 days": [800, 700, 600, 900, 1000, 1200, 1500],
    "Last 90 days": [1200, 1300, 1400, 1100, 1000, 900, 800],
  };

  const appointmentData = {
    "By Treatment": [
      { value: 40, name: "Treatment A" },
      { value: 30, name: "Treatment B" },
      { value: 20, name: "Treatment C" },
      { value: 10, name: "Treatment D" },
    ],
    "By Doctor": [
      { value: 50, name: "Dr. A" },
      { value: 25, name: "Dr. B" },
      { value: 15, name: "Dr. C" },
      { value: 10, name: "Dr. D" },
    ],
  };

  const revenueChartOption = {
    xAxis: {
      type: "category",
      data: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: revenueData[selectedRevenueOption],
        type: "line",
        smooth: true,
      },
    ],
  };

  const appointmentChartOption = {
    tooltip: { trigger: "item" },
    legend: { orient: "vertical", left: "left" },
    series: [
      {
        name: "Appointments",
        type: "pie",
        radius: "50%",
        data: appointmentData[selectedAppointmentOption],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="flex-1 flex-col bg-gray-100 ">

      {/* HEADER */}
      <header className="bg-white shadow flex-1">
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border rounded-md"
            />
            <div className="flex items-center space-x-2">
              <div>
                <h4 className="text-sm font-bold text-gray-800">Dr. Jose Simmons</h4>
                <p className="text-xs text-gray-500">General Practitioner</p>
              </div>
              <img src={doctor} alt="Dr. Jose Simmons" className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </div>
      </header>
      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-6 px-6">
        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Today's Appointments", count: 24, change: "+12.5%", icon: "fas fa-calendar" },
            { label: "New Patients", count: 12, change: "+5.2%", icon: "fas fa-user-plus" },
            { label: "Total Revenue", count: "$8,420", change: "+8.1%", icon: "fas fa-dollar-sign" },
            { label: "Pending Actions", count: 7, change: "+2", icon: "fas fa-clock" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.count}</p>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100">
                  <i className={`${item.icon} text-indigo-600 text-xl`} />
                </div>
              </div>
              <p className="text-green-500 text-sm font-medium mt-2">{item.change} this month</p>
            </div>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
              <select
                className="border rounded-md text-sm p-1"
                value={selectedRevenueOption}
                onChange={(e) => setSelectedRevenueOption(e.target.value)}
              >
                {Object.keys(revenueData).map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <ReactECharts option={revenueChartOption} style={{ height: "300px" }} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Appointment Distribution</h2>
              <select
                className="border rounded-md text-sm p-1"
                value={selectedAppointmentOption}
                onChange={(e) => setSelectedAppointmentOption(e.target.value)}
              >
                {Object.keys(appointmentData).map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <ReactECharts option={appointmentChartOption} style={{ height: "300px" }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
