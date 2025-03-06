import { FaPlus } from "react-icons/fa";
import Card from "../../components/Card";
import { usePatients } from "../../components/PatientContext";
import { Link } from "react-router-dom";
import ViewInvoice from "./ViewInvoice";
import { useState } from "react";

const Billing = () => {
  const patients = usePatients();
  const [viewInvoice, setViewInvoice] = useState(false);

   const [user, setUser] = useState({});

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default limit
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPatients = patients.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };


  return (
    <div className="flex flex-col bg-gray-100 p-7 h-dvh">
    
      <div className="flex justify-between items-center mb-8">
        {" "}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Billing Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage Invoice details
          </p>
        </div>
        <div className="flex space-x-4">
          {" "}
          <select className="border-gray-300 px-3 !rounded-button text-gray-700 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
          <Link
            to="/new-invoice"
            className="flex items-center rounded bg-green-500 text-white px-4 py-2 !rounded-button text-sm font-medium hover:bg-green-600"
          >
            {" "}
            <FaPlus size={15} className="mr-2" /> New Invoice
          </Link>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card
          bgStyle="p-3 rounded-full bg-indigo-100 text-indigo-600"
          icon="fa-solid fa-indian-rupee-sign text-xl"
          title="Total Revenue"
          value="24"
        />

        <Card
          bgStyle="p-3 rounded-full bg-green-100 text-green-600"
          icon="fas fa-file-medical text-xl"
          title="Insurance Claim"
          value={
            patients.filter((pat) => pat.appointment_status === "Completed")
              .length
          }
        />
        <Card
          bgStyle="p-3 rounded-full bg-yellow-100 text-yellow-600"
          icon="fas fa-clock text-xl"
          title="Pending Payments"
          value={
            patients.filter((pat) => pat.appointment_status === "Cancelled")
              .length
          }
        />
        <Card
          bgStyle="p-3 rounded-full bg-red-100 text-red-600"
          icon=" fas fa-exclamation-triangle text-xl"
          title="Overdue Bills"
          value={
            patients.filter((pat) => pat.appointment_status === "Upcoming")
              .length
          }
        />
      </div>

      <div className="bg-white shadow !rounded-button mb-8">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Recent Invoices
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Invoice #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th scope="col" className="relative px-6 py-3">
                  {" "}
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentPatients.map((patient)=>(
                <tr key={patient.patient_id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {" "}
                  {patient.billing.invoice_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {" "}
                  {patient.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {" "}
                  {patient.appointments.procedure}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {" "}
                  {patient.billing.total_amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {" "}
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${patient.billing.total_amount === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-900'}`}>
                    {patient.billing.total_amount === 0 ? "Paid" : "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {" "}
                  Jan 15, 2024
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {" "}
                  <button
                    onClick={() => {
                      setViewInvoice(true);
                      setUser(patient)
                    }}
                    className="
                    rounded px-4 py-2 
                    border border-green-500
                    text-green-500 hover:text-green-600"
                  >
                    View
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
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

      {/* <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Revenue/>

        <Payment/>
      </div> */}

      {viewInvoice && (
        <ViewInvoice patient={user} 
        billing={user.billing} 
        services={user.services}
        insurance={user.insurance}
        closeModal={() => {
            setViewInvoice(false);
          }}
        />
      )}
    </div>
  );
};

export default Billing;
