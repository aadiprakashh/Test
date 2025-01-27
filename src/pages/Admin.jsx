import { useState } from "react";
import { Link } from "react-router-dom";
import ReactECharts from "echarts-for-react";
const Admin = () => {

    const [selectedRevenueOption, setSelectedRevenueOption] = useState("Last 7 days");
    const [selectedAppointmentOption, setSelectedAppointmentOption] = useState("By Treatment");
  
    // Example Data
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
    //   title: { text: "Revenue Trend" },
      xAxis: { type: "category", data: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"] },
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
    //   title: { text: "Appointment Distribution", left: "center" },
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
    <div className="flex">
      <aside className="w-64 bg-white border-r border-gray-200 h-dvh">
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <Link
              to="/"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-custom bg-indigo-50 rounded-lg"
            >
              <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
              Dashboard
            </Link>
            <Link
              to="/patients"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-user-group w-5 h-5 mr-3"></i>
              Patients
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-calendar-alt w-5 h-5 mr-3"></i>
              Appointments
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-file-invoice-dollar w-5 h-5 mr-3"></i>
              Billing
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
              Analytics
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-cog w-5 h-5 mr-3"></i>
              Settings
            </Link>
          </div>
        </nav>
      </aside>

      <main className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-600 mt-1">Welcome back, Dr. Smith</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Today's Appointments",
              count: 24,
              change: "+12.5%",
              icon: "fas fa-calendar",
            },
            {
              label: "New Patients",
              count: 12,
              change: "+5.2%",
              icon: "fas fa-user-plus",
            },
            {
              label: "Total Revenue",
              count: "$8,420",
              change: "+8.1%",
              icon: "fas fa-dollar-sign",
            },
            {
              label: "Pending Actions",
              count: 7,
              change: "+2",
              icon: "fas fa-clock",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {item.count}
                  </p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className={`${item.icon} text-custom text-xl`} />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">
                  {item.change}
                </span>
                <span className="text-gray-600 text-sm ml-1">this month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Revenue Trend */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
          <select
            className="border-gray-200 rounded-lg text-sm"
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

      {/* Appointment Distribution */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Appointment Distribution</h2>
          <select
            className="border-gray-200 rounded-lg text-sm"
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

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Patients
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                {
                  name: "Sarah Johnson",
                  time: "10:30 AM",
                  treatment: "Dental Cleaning",
                  imgSrc: "...",
                },
                {
                  name: "Michael Brown",
                  time: "11:45 AM",
                  treatment: "Root Canal",
                  imgSrc: "...",
                },
                {
                  name: "Emily Davis",
                  time: "2:15 PM",
                  treatment: "Check-up",
                  imgSrc: "...",
                },
              ].map((patient, idx) => (
                <div key={idx} className="p-6 flex items-center">
                  <img
                    src={patient.imgSrc}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={patient.name}
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        {patient.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {patient.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {patient.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Critical Alerts
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                {
                  type: "Overdue Payment",
                  details: "Invoice #1234 is 30 days overdue",
                  icon: "fas fa-exclamation-circle",
                  bg: "red",
                },
                {
                  type: "Appointment Reminder",
                  details: "3 appointments need confirmation",
                  icon: "fas fa-bell",
                  bg: "yellow",
                },
                {
                  type: "Inventory Alert",
                  details: "Low stock on dental supplies",
                  icon: "fas fa-info-circle",
                  bg: "blue",
                },
              ].map((alert, idx) => (
                <div
                  key={idx}
                  className={`flex items-center p-4 bg-${alert.bg}-50 rounded-lg`}
                >
                  <i className={`${alert.icon} text-${alert.bg}-500 mr-3`} />
                  <div>
                    <p className={`text-sm font-medium text-${alert.bg}-800`}>
                      {alert.type}
                    </p>
                    <p className={`text-sm text-${alert.bg}-600 mt-1`}>
                      {alert.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Upcoming Appointments
              </h3>
              <div className="mt-4 space-y-4">
                {[
                  {
                    name: "Emma Thompson",
                    treatment: "Dental Cleaning",
                    time: "10:00 AM",
                    doctor: "Dr. Wilson",
                    imgSrc: "...",
                  },
                  {
                    name: "James Wilson",
                    treatment: "Root Canal",
                    time: "11:30 AM",
                    doctor: "Dr. Wilson",
                    imgSrc: "...",
                  },
                  {
                    name: "Robert Brown",
                    treatment: "Check-up",
                    time: "2:00 PM",
                    doctor: "Dr. Wilson",
                    imgSrc: "...",
                  },
                ].map((appt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={appt.imgSrc}
                        alt={appt.name}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {appt.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appt.treatment}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {appt.time}
                      </p>
                      <p className="text-sm text-gray-500">{appt.doctor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
