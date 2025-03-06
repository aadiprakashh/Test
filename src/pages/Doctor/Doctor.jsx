import { FaUser } from "react-icons/fa";
import { usePatients } from "../../components/PatientContext";
import { useState } from "react";

const Doctor = () => {
  const patients = usePatients();
  const doctors = [
    ...new Set(patients.slice(0,8).map((patient) => patient.doctor)),
  ];
  const docSpecialty = [...new Set(doctors.map((doctor) => doctor.specialty))];
  const [specialty, setSpeciality] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const filterDoctors = doctors.filter((doctor) => {
    const matchSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchStatus = status ? doctor.availability === status : doctor;
    const matchSpeciality = specialty ? doctor.specialty === specialty : doctor;
    return matchStatus && matchSpeciality && matchSearch;
  });

  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 h-dvh transition-all">
      <div className="mb-8">
        {/* heeader */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Doctor Management
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage doctor details
            </p>
          </div>{" "}
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button"
          >
            <i className="fas fa-plus -ml-1 mr-2"></i>
            Add Doctor
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {" "}
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Search by name, specialty or role..."
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={specialty}
              onChange={(e) => setSpeciality(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
            <option value="">All Speciality</option>
              {docSpecialty.map((docs) => (
                <option key={docs} value={docs}>
                  {docs}
                </option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="">All Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterDoctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="relative ">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaUser size={20} color="gray" />
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>

                  <div
                    className={`ms-auto ${
                      doctor.availability === "Available"
                        ? "bg-green-500"
                        : "bg-red-500"
                    } w-4 h-4 rounded-full border-2 border-white shadow-md`}
                  ></div>
                  {/*<div className="mt-1 flex items-center">
                    {" "}
                     <span className={`flex-shrink-0 h-3 w-3 rounded-full ${doctor.availability === "Available" ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="ml-2 text-sm text-gray-500">
                    {doctor.availability === "Available" ? "Available" : "Unavailable"}
                    </span>  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${doctor.availability === "Available" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-900'}`}>
                    {doctor.availability === "Available" ? "Available" : "Unavailable"}
                  </span> 
                  </div>*/}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 123-4567
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  {" "}
                  <i className="fas fa-calendar mr-2"></i>
                  Mon - Fri, 9:00 AM - 5:00 PM
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="!rounded-button w-full inline-flex justify-center items-center px-4 py-2 border border-green-500 text-sm font-medium text-green-500 bg-white hover:bg-gray-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                {" "}
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                                  <FaUser size={22} color="gray" />
                                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Dr. Michael Chen
                  </h3>
                  <p className="text-sm text-gray-500">Periodontist</p>
                  <div className="mt-1 flex items-center">
                    {" "}
                    <span className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="ml-2 text-sm text-gray-500">
                      Unavailable
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 234-5678
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  {" "}
                  <i className="fas fa-calendar mr-2"></i>
                  Mon - Thu, 8:00 AM - 4:00 PM
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="!rounded-button w-full inline-flex justify-center items-center px-4 py-2 border border-green-500 text-sm font-medium text-green-500 bg-white hover:bg-gray-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                {" "}
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                                  <FaUser size={22} color="gray" />
                                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Emma Thompson
                  </h3>
                  <p className="text-sm text-gray-500">Dental Hygienist</p>
                  <div className="mt-1 flex items-center">
                    {" "}
                    <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="ml-2 text-sm text-gray-500">
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 345-6789
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  {" "}
                  <i className="fas fa-calendar mr-2"></i>
                  Tue - Sat, 10:00 AM - 6:00 PM
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="!rounded-button w-full inline-flex justify-center items-center px-4 py-2 border border-green-500 text-sm font-medium text-green-500 bg-white hover:bg-gray-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                {" "}
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                                  <FaUser size={22} color="gray" />
                                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    James Rodriguez
                  </h3>
                  <p className="text-sm text-gray-500">Dental Assistant</p>
                  <div className="mt-1 flex items-center">
                    {" "}
                    <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="ml-2 text-sm text-gray-500">
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-phone mr-2"></i>
                  +1 (555) 456-7890
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  {" "}
                  <i className="fas fa-calendar mr-2"></i>
                  Mon - Fri, 8:30 AM - 4:30 PM
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="!rounded-button w-full inline-flex justify-center items-center px-4 py-2 border border-green-500 text-sm font-medium text-green-500 bg-white hover:bg-gray-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div> */}
      </div>

      {/* pagination */}
      {/* <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-sm text-gray-700">
              {" "}
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">4</span> of{" "}
              <span className="font-medium">12</span> results
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="!rounded-button relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="button"
              className="!rounded-button relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div> */}
    </main>
  );
};

export default Doctor;
