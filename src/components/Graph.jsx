import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { usePatients } from "./PatientContext";

const Graph = () => {
  const patients = usePatients();
  const [selectedAppointmentOption, setSelectedAppointmentOption] =
    useState("By Treatment");

  // Step 1: Use reduce to count procedures and statuses
  const { treatmentCount, statusCount } = patients.reduce(
    (acc, patient) => {
      const { procedure, status } = patient.appointments;

      // Count procedures
      acc.treatmentCount[procedure] = (acc.treatmentCount[procedure] || 0) + 1;

      // Count appointment statuses
      acc.statusCount[status] = (acc.statusCount[status] || 0) + 1;

      return acc;
    },
    { treatmentCount: {}, statusCount: {} } // Initial value
  );

  // Step 2: Convert to ECharts format
  const appointmentData = {
    "By Treatment": Object.entries(treatmentCount).map(([name, value]) => ({
      name,
      value,
    })),
    "By Status": Object.entries(statusCount).map(([name, value]) => ({
      name,
      value,
    })),
  };

  // Step 3: Define Chart Options
  const appointmentChartOption = {
    tooltip: { trigger: "item" },
    legend: { orient: "horizontal", left: "left" },
    series: [
      {
        name: "Appointments",
        type: "pie",
        radius: "50%",
        data: appointmentData[selectedAppointmentOption],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow w-[500px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Appointment Distribution
        </h2>
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
      <ReactECharts
        option={appointmentChartOption}
        style={{ height: "300px" }}
      />
    </div>
  );
};

export default Graph;
