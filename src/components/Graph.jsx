import  { useState } from "react";
import { patients } from "../data";
const Graph = () => {

  const [selectedPatient, setSelectedPatient] = useState();
  const [filteredPatient, setFilteredPatient] = useState(patients);

  const handleClick = (event) => {
    const select = event.target.value;
    setSelectedPatient(select);
    if(select === ""){
      setFilteredPatient(patients)
    }
    else if(select === "Pending"){
      setFilteredPatient(patients.filter(patient => patient.patient_treatment_status === false));
    }
    else  if(select === "Completed"){
      setFilteredPatient(patients.filter(patient => patient.patient_treatment_status === true));
    }
  }
  
  return (
    <div className="p-4">
      {/* Dropdown for selecting category */}
      <select value={selectedPatient} onChange={handleClick}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>


      <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                        >
                          Patient ID
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Patient Name
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Last Visit
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Next Appointment
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                        >
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredPatient.map((patient, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            {patient.patient_id}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {patient.name}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {patient.phone}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {patient.last_dental_visit}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            {patient.next_appointment}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">

                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${patient.patient_treatment_status === true ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                            `}>
                              {patient.patient_treatment_status === true ? "Completed" : "Pending"}
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                            <button
                              type="button"
                              className="text-custom hover:text-custom/80 mr-3"
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                            >
                              {" "}
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
    </div>
  );
};

export default Graph;
