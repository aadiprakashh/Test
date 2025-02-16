export const AddPatient = ({onClose}) => {
  return (
    <div
      id="employee-edit-page"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm"
    >
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl transform transition-all duration-300 scale-95 animate-fadeInUp">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Add New Patient</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <form className="space-y-6">
            {/* Patient Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient ID</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2 cursor-not-allowed bg-gray-100 disabled" value="PAT006" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2" />
            </div>

            

<div >
<label className="block text-sm font-medium text-gray-700">Illness / Current Issue</label>
<input type="text/" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Current Issue"/>
</div>

<div >
<label className="block text-sm font-medium text-gray-700">Ongoing Medications</label>
<input type="text/" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"/>
</div>
            {/* Appointment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Next Appointment Date</label>
                <input type="date" className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
                <input type="time" className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2" />
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded-md  transition"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
            Save Patient
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
