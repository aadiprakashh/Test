import {
  FaCalendarAlt,
  FaClock,
  FaTooth,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaRegClock,
} from "react-icons/fa";

const AppointmentsTab = ({ patient }) => {
  // Define color coding for statuses
  const statusColors = {
    Scheduled: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  const treatmentColors = {
    Completed: "bg-green-100 text-green-700",
    Ongoing: "bg-yellow-100 text-yellow-700",
    Scheduled: "bg-blue-100 text-blue-700",
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <FaCheckCircle />;
      case "Cancelled":
        return <FaTimesCircle />;
      case "Scheduled":
        return <FaRegClock />;
      default:
        return <FaExclamationCircle />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        📅 Next Appointment
      </h3>
      <div className="space-y-4">
        {/* Appointment ID */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Appointment ID</span>
          <span className="text-gray-900 font-medium">
            {patient.appointment_id}
          </span>
        </div>

        {/* Date & Time */}
          <div className="flex justify-between items-center">
            
              <span className="text-gray-500">Date</span>
           
            <span className="text-gray-900 font-medium">{patient.date}</span>
          </div>
          <div className="flex justify-between items-center">
            
              
              <span className="text-gray-500">Time</span>
            
            <span className="text-gray-900 font-medium">{patient.time}</span>
          </div>
        

        {/* Treatment */}
        <div className="flex justify-between items-center">
            <span className="text-gray-500">Treatment</span>
          <span className="text-gray-900 font-medium">{patient.procedure}</span>
        </div>

        {/* Treatment Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Treatment Status</span>
          <span
            className={`px-2 py-1 text-sm rounded-md font-medium ${
              treatmentColors[patient.treatment_status]
            }`}
          >
            {patient.treatment_status}
          </span>
        </div>

        {/* Appointment Status */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Appointment Status</span>
          <span
            className={`px-2 py-1 text-sm rounded-md font-medium flex items-center gap-2 ${
              statusColors[patient.status]
            }`}
          >
            {getStatusIcon(patient.status)}
            {patient.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTab;
