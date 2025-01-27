import { useState, useEffect } from "react";

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);

  // Fetch the patient list
  useEffect(() => {
    const fetchPatients = async () => {
      const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Mike Johnson" },
      ];
      setPatients(data);
    };
    fetchPatients();
  }, []);

  // Fetch selected patient details
  useEffect(() => {
    if (selectedPatientId) {
      const fetchPatientDetails = async () => {
        const patientData = {
          1: {
            name: "John Doe",
            age: 32,
            gender: "Male",
            contact: "123-456-7890",
            email: "johndoe@example.com",
            address: "123 Elm Street, Springfield",
            appointments: [
              { id: 1, date: "2025-01-20", time: "10:00 AM", dentist: "Dr. Smith", status: "Scheduled" },
              { id: 2, date: "2025-01-15", time: "2:00 PM", dentist: "Dr. Brown", status: "Completed" },
            ],
            billing: [
              { id: 1, date: "2025-01-10", amount: "$150", status: "Paid" },
              { id: 2, date: "2025-01-05", amount: "$200", status: "Unpaid" },
            ],
          },
          2: {
            name: "Jane Smith",
            age: 28,
            gender: "Female",
            contact: "987-654-3210",
            email: "janesmith@example.com",
            address: "456 Oak Street, Springfield",
            appointments: [
              { id: 1, date: "2025-02-10", time: "11:00 AM", dentist: "Dr. Brown", status: "Scheduled" },
            ],
            billing: [{ id: 1, date: "2025-02-01", amount: "$100", status: "Paid" }],
          },
          3: {
            name: "Mike Johnson",
            age: 40,
            gender: "Male",
            contact: "555-123-4567",
            email: "mikejohnson@example.com",
            address: "789 Pine Street, Springfield",
            appointments: [],
            billing: [],
          },
        };
        setPatientDetails(patientData[selectedPatientId]);
      };
      fetchPatientDetails();
    }
  }, [selectedPatientId]);

  return (
    <div className="flex h-screen">
      {/* Sidebar for Patient List */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Patients</h2>
        <ul>
          {patients.map((patient) => (
            <li
              key={patient.id}
              className={`p-3 mb-2 rounded cursor-pointer text-gray-700 ${
                selectedPatientId === patient.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedPatientId(patient.id)}
            >
              {patient.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content for Patient Details */}
      <div className="w-3/4 p-6">
        {patientDetails ? (
          <>
            {/* Patient Information */}
            <div className="bg-white shadow-md p-6 rounded mb-6">
              <h2 className="text-2xl font-bold mb-4">{patientDetails.name}</h2>
              <p className="text-gray-700">Age: {patientDetails.age}</p>
              <p className="text-gray-700">Gender: {patientDetails.gender}</p>
              <p className="text-gray-700">Contact: {patientDetails.contact}</p>
              <p className="text-gray-700">Email: {patientDetails.email}</p>
              <p className="text-gray-700">Address: {patientDetails.address}</p>
            </div>

            {/* Appointments Section */}
            <div className="bg-white shadow-md p-6 rounded mb-6">
              <h3 className="text-xl font-bold mb-4">Appointments</h3>
              {patientDetails.appointments.length > 0 ? (
                <ul className="space-y-3">
                  {patientDetails.appointments.map((appt) => (
                    <li
                      key={appt.id}
                      className="p-4 bg-gray-100 rounded shadow-sm"
                    >
                      <p className="text-gray-800">
                        <strong>{appt.date}</strong> at {appt.time}
                      </p>
                      <p className="text-gray-600">
                        Dentist: {appt.dentist} - {appt.status}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No appointments found.</p>
              )}
            </div>

            {/* Billing Section */}
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-bold mb-4">Billing</h3>
              {patientDetails.billing.length > 0 ? (
                <ul className="space-y-3">
                  {patientDetails.billing.map((bill) => (
                    <li
                      key={bill.id}
                      className="p-4 bg-gray-100 rounded shadow-sm"
                    >
                      <p className="text-gray-800">
                        <strong>{bill.date}</strong> - {bill.amount}
                      </p>
                      <p
                        className={`text-sm ${
                          bill.status === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {bill.status}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No billing records found.</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">
            Please select a patient to view their details.
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
