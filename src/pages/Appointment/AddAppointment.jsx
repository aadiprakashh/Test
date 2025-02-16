import { FaTimes } from "react-icons/fa";

const AddAppointment = ({closeModal, treatment, doctors }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
      <div className=" w-[700px] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            {/* header */}
            <div className="flex items-center mb-4 justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">
                Schedule New Appointment
              </h2>

              <FaTimes size={20} onClick={closeModal} />
            </div>
            <div className="flex flex-col gap-3">
              {" "}
              {/* search */}
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    {" "}
                    <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="Search existing patients..."
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
                    />{" "}
                  </div>
                </div>
                <button className="rounded border border-green-500  px-4 py-2 text-sm font-medium text-green-500">
                  {" "}
                  <i className="fas fa-user-plus mr-2"></i>New Patient
                </button>
              </div>{" "}
              {/* appointment details */}
              <div className="pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Appointment Details
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    {" "}
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Doctor
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:ring-custom focus:border-custom">
                      {doctors.map((doctor, index) => (
                        <option key={index}>{doctor}</option>
                      ))}
                    </select>
                  </div>{" "}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Treatment Type
                    </label>{" "}
                    <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:ring-custom focus:border-custom">
                      {" "}
                      {treatment.map((treatment, index) => (
                        <option key={index}>{treatment}</option>
                      ))}
                    </select>{" "}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-custom focus:border-custom"
                    />{" "}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:ring-custom focus:border-custom">
                      {" "}
                      <option>09:00 AM</option>
                      <option>09:30 AM</option>
                      <option>10:00 AM</option>
                      <option>10:30 AM</option>
                    </select>
                  </div>{" "}
                </div>
              </div>
              {/* additional notes */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Additional Notes
                </h3>
                <textarea
                  rows="2"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-custom focus:border-custom"
                  placeholder="Add any special instructions or notes..."
                ></textarea>
              </div>
              {/* button  */}
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="!rounded-button bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  {" "}
                  Cancel
                </button>
                <button className="!rounded-button bg-green-500 text-white px-6 py-2 text-sm font-medium hover:bg-green-700">
                  {" "}
                  <i className="fas fa-check mr-2"></i>Confirm Appointment
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
