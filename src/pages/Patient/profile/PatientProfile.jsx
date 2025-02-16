import { useState } from "react";
import { FaUser } from "react-icons/fa";
import OverviewTab from './OverviewTab'
import MedicalHistoryTab from './MedicalHistoryTab'
import AppointmentsTab from './AppointmentsTab'
import TreatmentsPlanTab from './TreatmentsPlanTab'
import BillingTab from './BillingTab'
import DocumentsTab from './DocumentsTab'
// eslint-disable-next-line react/prop-types
const PatientProfile = ({ patient, closeModal }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Medical History", "Appointments", "Billing", "Documents"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser size={30} color="gray" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{patient.name}</h2>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-sm text-gray-500">ID: {patient.patient_id}</span>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Insurance Active
                </span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500" onClick={closeModal}>
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex px-6 space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-4 text-gray-500 hover:text-gray-700 ${activeTab === tab ? "border-b-2 border-green-500 text-green-500 font-medium" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === "Overview" && <OverviewTab patient={patient} />}
          {activeTab === "Medical History" && <MedicalHistoryTab patient={patient.medical_history} />}
          {activeTab === "Appointments" && <AppointmentsTab patient={patient.appointments} />}
          {/* {activeTab === "Treatment Plans" && <TreatmentsPlanTab patient={patient} />} */}
          {activeTab === "Billing" && <BillingTab billing={patient.billing} insurance={patient.insurance}/>}
          {activeTab === "Documents" && <DocumentsTab />}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">Last updated: Apr 1, 2024 at 2:30 PM</span>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={closeModal}>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-400 text-white hover:bg-green-600/90">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
