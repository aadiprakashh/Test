const OverviewTab = ({ patient }) => {
  const insuranceUsed = patient.insurance.insurance_used / 2000;
  const insuranceCoverage = parseInt(insuranceUsed * 100);
    return (
        <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">
            Personal Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Gender</span>{" "}
              <span className="text-gray-900">{patient.gender}</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <span className="text-gray-500">Phone</span>
              <span className="text-gray-900">{patient.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-900">{patient.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Dentist</span>{" "}
              <span className="text-gray-900">{patient.appointments.dentist}</span>
            </div>
          </div>
        </div>

        {/* upcoming appointment */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">
            Upcoming Appointments
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div >
                <p className="font-medium">{patient.appointments.procedure}</p>
                <p className="text-sm text-gray-500">{patient.appointments.dentist}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{patient.next_appointment}</p>
                <p className="text-sm text-gray-500">10:30 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* recent tretment */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Recent Treatments</h3>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{patient.last_visit.procedure}</span>
                <span className="text-gray-500">{patient.last_visit.date}</span>
              </div>
              <p className="text-sm text-gray-600">
                {patient.note}
              </p>
            </div>
            
          </div>
        </div>

        {/* billing summary */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Billing Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Total Amount</span>{" "}
              <span className="font-medium text-gray-900">₹ {patient.billing.total_amount}</span>
            </div>
            <div className="flex justify-between">
              {" "}
              <span className="text-gray-500">Paid Amount</span>
              <span className="text-gray-900">₹ {patient.billing.paid_amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Insurance Coverage</span>
              <span className="text-gray-900">{insuranceCoverage}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default OverviewTab