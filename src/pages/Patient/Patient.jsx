// import { useState, useEffect, useRef } from "react";
import { useState } from "react";
import { patients } from "../../data";

const Patient = () => {

  // State for selected option and filtered data
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState(patients);

  // Handle category change
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);

    // Filter items based on the selected category
    if (selected === "") {
      setFilteredItems(patients); // Show all items if no category is selected
    } else if( selected === "Pending"){
      setFilteredItems(patients.filter(patient => patient.patient_treatment_status === false)); // Filter by selected category
      // console.log('pending')
    }
    else if( selected === "Completed"){
      setFilteredItems(patients.filter(patient => patient.patient_treatment_status === true));
      // console.log('completed')
    }

    
  }

  return (
    <main className=" w-dvw py-6 p-7 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                  {" "}
                  <i className="fas fa-users text-custom text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Patients
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      2,847
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                  {" "}
                  <i className="fas fa-calendar-check text-custom text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Today&apos;s Appointments
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">24</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                  {" "}
                  <i className="fas fa-clock text-custom text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Treatments
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">156</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-custom/10 rounded-md p-3">
                  {" "}
                  <i className="fas fa-user-plus text-custom text-xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      New Patients (This Month)
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">89</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                        className="focus:ring-custom focus:border-custom block w-full pl-10 sm:text-sm border-gray-300 !rounded-button"
                        placeholder="Search patients..."
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-auto">
                    {" "}
                    <select value={selectedCategory} onChange={handleCategoryChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button">
                      <option value="">All Status</option>
                      {/* <option value="Active">Active</option> */}
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-auto">
                    {" "}
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button">
                      <option value="">All Treatments</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Filling">Filling</option>
                      <option value="Root Canal">Root Canal</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-black hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button"
                >
                  <i className="fas fa-plus -ml-1 mr-2"></i>
                  Add New Patient
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                      {filteredItems.map((patient, index) => (
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
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex flex-col items-center">
                {" "} 
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom focus:border-custom sm:text-sm !rounded-button">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
               <span className="text-sm text-gray-700">
                  entries per page
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 !rounded-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 !rounded-button"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Patient;
