// import { useState, useEffect, useRef } from "react";
import { useState } from "react";
// import { patients } from "../../data";
import Card from "../../components/Card";
import { usePatients } from "../../components/PatientContext";
import { AddPatient } from "./AddPatient";
import PatientTable from "./PatientTable";

const Patient = () => {
  const patients = usePatients();
  // const today = new Date().toISOString().split("T")[0];
  // const todaysAppointments = patients.filter(
  //   (patient) => patient.appointment.date === today
  // );
  const [addPatient, setAddPatient] = useState(false);

  return (
    <main className="flex flex-col bg-gray-100 p-7">
      {/* header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Patient Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage Patient details
          </p>
        </div>{" "}
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-black hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button"
          onClick={() => {
            setAddPatient(true);
          }}
        >
          <i className="fas fa-plus -ml-1 mr-2"></i>
          Add New Patient
        </button>
      </div>

      {/* cards */}
      <div className="px-4 sm:px-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            bgStyle="p-3 rounded-full bg-indigo-100 text-indigo-600"
            icon=" fa-users text-xl"
            title="Total Patients"
            value={patients.filter((patient) => patient).length}
          />

          <Card
            bgStyle="p-3 rounded-full bg-green-100 text-green-600"
            icon=" fa-calendar-check text-xl"
            title="Today's Appointments"
            value={patients.length}  //currently set as patients length 
          />

          <Card
            bgStyle="p-3 rounded-full bg-yellow-100 text-yellow-600"
            icon=" fa-user-plus text-xl"
            title="New Patients (This Month)"
            value="89"
          />

          <Card
            bgStyle="p-3 rounded-full bg-red-100 text-red-600"
            icon=" fa-clock text-xl"
            title="Pending Treatments"
            value={
              patients.filter(
                (patient) => patient.patient_treatment_status === false
              ).length
            }
          />
        </div>
      </div>

      {/* patient table */}
      <PatientTable />

      {addPatient && (
        <AddPatient
          onClose={() => {
            setAddPatient(false);
          }}
        />
      )}
    </main>
  );
};

export default Patient;
