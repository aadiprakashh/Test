import Card from "../../components/Card";

const Appointment = () => {
    return(
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Appointment Management
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Track and manage Appointment details
              </p>
            </div>{" "}
            <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-black hover:bg-custom/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button"
                >
                  <i className="fas fa-plus -ml-1 mr-2"></i>
                  Add Appointment
                </button>
          </div>

        <div className="grid grid-cols-4 gap-4 mb-8">

  <Card
              bgStyle="p-3 rounded-full bg-indigo-100 text-indigo-600"
              icon="fa-solid fa-calendar-check text-xl"
              title="Today's Appointment"
              value="24"
            />

<Card
              bgStyle="p-3 rounded-full bg-green-100 text-green-600"
              icon="fa-solid fa-user-check text-xl"
              title="Completed"
              value="12"
            />
              <Card
              bgStyle="p-3 rounded-full bg-yellow-100 text-yellow-600"
              icon=" fa-clock text-xl"
              title="Pending"
              value="8"
            />
              <Card
              bgStyle="p-3 rounded-full bg-red-100 text-red-600"
              icon=" fa-ban text-xl"
              title="Cancelled"
              value="2"
            />

            
           
            
            
        </div>

        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-medium text-gray-900">Today&apos;s Schedule</h2>
                            <div className="flex space-x-2"> <button
                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button text-gray-700 bg-white hover:bg-gray-50">
                                    Day
                                </button>
                                <button
                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium !rounded-button text-gray-700 bg-white hover:bg-gray-50">
                                    Week
                                </button>
                                <button
                                    className="inline-flex items-center px-3 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                                    Month
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0 w-16 text-center">
                                    <div className="text-sm font-medium text-gray-900">09:00</div>
                                    <div className="text-sm text-gray-500">AM</div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900">John Smith</h4>
                                            <p className="text-sm text-gray-500">Regular Check-up</p>
                                        </div> <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Confirmed
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0 w-16 text-center">
                                    <div className="text-sm font-medium text-gray-900">10:30</div>
                                    <div className="text-sm text-gray-500">AM</div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900">Emily Johnson</h4>
                                            <p className="text-sm text-gray-500">Root Canal Treatment</p>
                                        </div> <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0 w-16 text-center">
                                    <div className="text-sm font-medium text-gray-900">02:00</div>
                                    <div className="text-sm text-gray-500">PM</div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900">Michael Brown</h4>
                                            <p className="text-sm text-gray-500">Teeth Cleaning</p>
                                        </div> <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Completed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                                <i className="fas fa-plus mr-2"></i>
                                New Appointment
                            </button> <button
                                className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                                <i className="fas fa-user-plus mr-2"></i>
                                Add Patient
                            </button> <button
                                className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                                <i className="fas fa-bell mr-2"></i>
                                Send Reminder
                            </button> <button
                                className="inline-flex items-center justify-center px-4 py-2 border border-custom shadow-sm text-sm font-medium !rounded-button text-custom bg-white hover:bg-gray-50">
                                <i className="fas fa-calendar-alt mr-2"></i>
                                View Calendar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Patients</h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young woman with a natural smile against a light background&width=40&height=40&orientation=squarish&flag=c2d1138a-428e-4244-a648-96f34eabdd6b"
                                    alt=""/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Sarah Davis</p>
                                    <p className="text-sm text-gray-500">Last visit: 2 days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged man with glasses against a light background&width=40&height=40&orientation=squarish&flag=1a1a0140-f154-4033-9bfe-1e0a0427f30f"
                                    alt=""/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Robert Wilson</p>
                                    <p className="text-sm text-gray-500">Last visit: 1 week ago</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young man with a friendly smile against a light background&width=40&height=40&orientation=squarish&flag=39a9f577-210b-41cc-9236-dd05e93a1f6d"
                                    alt=""/>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">James Thompson</p>
                                    <p className="text-sm text-gray-500">Last visit: 2 weeks ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Appointment;