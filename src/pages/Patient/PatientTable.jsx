import { useState } from "react";
import { useTreatments } from "../../components/TreatmentsContext";
import {  FaTrashAlt, FaUser, FaUserEdit } from "react-icons/fa";
import { usePatients } from "../../components/PatientContext";
import PatientProfile from "./profile/PatientProfile";

const PatientTable = () => {
  const patients = usePatients();
  const treatments = useTreatments();
  const treatmentStatus = [
    ...new Set(patients.map((patient) => patient.appointments.treatment_status)),
  ];

  // console.log(treatments)

 
  const [status, setStatus] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [search, setSearch] = useState("");
  const filterPatients = patients.filter((patient) => {
    const matchSearch = patient.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchTreatment = selectedTreatment
      ? patient.appointments.procedure?.toLowerCase() === selectedTreatment.toLowerCase()
      : true;

    const matchStatus = status ? patient.appointments.treatment_status === status : patients;

    return matchStatus && matchSearch && matchTreatment;
  });

//   select user
  const [user, setUser] = useState(patients.map(patient=>patient));
//  show modal
  const [profile, setProfile] = useState(false)


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default limit
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPatients = filterPatients.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };
  const statusStyles = {
    Completed: "text-green-800 bg-green-100",
    Scheduled: "text-blue-800 bg-blue-100",
    Ongoing: "text-yellow-800 bg-yellow-100",
  };
  return (
    <div className="mt-8 px-4 sm:px-0">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-search text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                      className="focus:ring-custom focus:border-custom block w-full pl-10 sm:text-sm border-gray-300 !rounded-button"
                      placeholder="Search patients..."
                    />
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  {" "}
                  <select
                    value={status}
                    onChange={(event) => {
                      setStatus(event.target.value);
                    }}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button"
                  >
                    <option value="">All Status</option>
                    {treatmentStatus.map((treat, index) => (
                      <option key={index} value={treat}>
                        {treat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full sm:w-auto">
                  {" "}
                  <select
                    value={selectedTreatment}
                    onChange={(event) => {
                      setSelectedTreatment(event.target.value);
                    }}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button"
                  >
                    <option value="">All Treatments</option>
                    {treatments.map((treatment, index) => (
                      <option key={index} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      {/* <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                        >
                          Patient ID
                        </th> */}
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
                        Current Issue
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentPatients.map((patient, index) => (
                      <tr key={index}>
                        {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            {patient.patient_id}
                          </td> */}
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            {/* <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              {/* <i className="fas fa-user text-gray-400"></i> 
                              <FaUser size={20} color="gray" />
                            </div> */}
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <img src={patient.image} alt={patient.name} className=" rounded-full"/>
                            </div>

                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {patient.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                ID:{patient.patient_id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          {patient.phone}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          {patient.last_visit.date}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          {patient.appointments.date}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          {patient.appointments.procedure}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${statusStyles[patient.appointments.treatment_status]}
                            `}
                          >
                            {patient.appointments.treatment_status}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center justify-center items-center text-sm font-medium sm:pr-6 md:pr-0">
                          <button
                            type="button"
                            className="text-blue-700 hover:text-blue-700/80 mr-3 "
                            onClick={()=>{setUser(patient);setProfile(true)}}
                          >
                          <FaUserEdit size={20}/>
                            {/* <i className=""></i> */}
                          </button>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900"
                          >
                            {" "}
                            <FaTrashAlt size={20}/>
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filterPatients.length === 0 && (
                      <tr>
                        <td
                          colSpan="6"
                          className="text-center py-4 text-gray-500"
                        >
                          No Patients found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                {/* Items Per Page Selector */}
                <div className="mt-6">
                  <label className="text-gray-700 font-medium">
                    Patients per page:{" "}
                  </label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset to first page
                    }}
                    className="ml-2 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[10, 25, 50].map((limit) => (
                      <option key={limit} value={limit}>
                        {limit}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex !rounded-button -space-x-px"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-2 py-2 !rounded-l-lg border border-gray-300  text-sm font-medium  ${
                        currentPage === 1
                          ? "bg-white text-gray-500 hover:bg-gray-50"
                          : "text-blue-600 hover:bg-blue-700 hover:text-white"
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      <i className="fas fa-chevron-left"></i>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                            currentPage === page
                              ? "text-blue-600  font-semibold"
                              : " text-gray-700 font-semibold"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      className={`relative inline-flex items-center px-2 py-2 !rounded-r-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed border-none"
                          : "text-blue-600 hover:bg-blue-700 hover:text-white"
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {profile && <PatientProfile patient={user} closeModal={()=>{setProfile(false)}}/>}
    </div>
  );
};

export default PatientTable;
