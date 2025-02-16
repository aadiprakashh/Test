const PatientAppointment = () => {
    return(
        <div className="p-6">
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Upcoming Appointments
                                </h3>
                                <button className="text-sm text-custom hover:text-custom/80">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Root Canal Follow-up
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Dr. Sarah Wilson
                                            </p>
                                        </div>
                                        <p className="text-sm font-medium text-custom">
                                            Jan 28, 2024
                                            <br />
                                            10:30 AM
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <i className="fas fa-clock text-gray-400 mr-2"></i>
                                            <span className="text-sm text-gray-500">45 minutes</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                                                Reschedule
                                            </button>
                                            <button className="!rounded-button px-3 py-1 text-sm border border-transparent bg-custom text-white hover:bg-custom/90">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Regular Checkup
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Dr. Sarah Wilson
                                            </p>
                                        </div>
                                        <p className="text-sm font-medium text-custom">
                                            Mar 15, 2024
                                            <br />
                                            2:00 PM
                                        </p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <i className="fas fa-clock text-gray-400 mr-2"></i>
                                            <span className="text-sm text-gray-500">30 minutes</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                                                Reschedule
                                            </button>
                                            <button className="!rounded-button px-3 py-1 text-sm border border-transparent bg-custom text-white hover:bg-custom/90">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg mt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Past Appointments
                            </h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Root Canal Treatment
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Dr. Sarah Wilson
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">Dec 15, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Procedure completed successfully. Follow-up scheduled.
                                    </p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Dental Cleaning
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Dr. Sarah Wilson
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">Sep 30, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Regular cleaning performed. No major issues found.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default PatientAppointment;