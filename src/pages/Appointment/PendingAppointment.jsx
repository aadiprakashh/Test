import { FaEdit, FaTimes, FaUser } from "react-icons/fa";
import { FaRotateLeft } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

const PendingAppointment = ({filterPatient, aStatus}) => {
    return (
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filterPatient.map(patient => (
        <div
          key={patient.patient_id}
          className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex flex-col justify-between w-[300px]"
        >
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <FaUser size={22} color="gray" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">
                    {patient.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ID: {patient.patient_id}
                  </p>
                </div>
              </div>
              {/* <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  aStatus[patient.appointment_status]
                }`}
              >
                {patient.appointment_status}
              </span> */}
              <FaEdit size={15} className="mr-2" />
            </div>

            {/* Patient Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-700">
                <i className="fas fa-tooth w-5 text-custom"></i>
                <span className="ml-2 font-medium">
                  {patient.appointments.procedure}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-calendar-alt w-5"></i>
                <span className="ml-2">{patient.appointments.status}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-clock w-5"></i>
                <span className="ml-2">{patient.appointments.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-user-md w-5"></i>
                <span className="ml-2">{patient.appointments.dentist}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-notes-medical w-5"></i>
                <span className="ml-2">Notes: {patient.note}</span>
              </div>

              {/* Priority Badges */}
              {/* <div className="mt-2 flex items-center space-x-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                  High Priority
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  First Visit
                </span>
              </div> */}
            </div>
          </>

          {/* Buttons */}
          <div className="mt-5 flex space-x-2">
            <button className="flex-1 px-4 py-2 border flex items-center hover:bg-green-100 border-gray-300 rounded-lg text-gray-700  transition">
              <IoMdCheckmarkCircle size={15} className="mr-2" />Accept
            </button>
            {patient.appointment_status !== "Cancelled" ? (
              <button
                key={patient.patient_id}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-red-600 hover:bg-red-50 transition flex items-center justify-center"
              >
                <FaTimes size={15} className="mr-2" /> Cancel
              </button>
            ) : (
              <button
                key={patient.patient_id}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-blue-600 hover:bg-blue-50 transition flex items-center"
              >
                <FaRotateLeft size={15} className="mr-2" /> Reschedule
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
    );
}

export default PendingAppointment;
