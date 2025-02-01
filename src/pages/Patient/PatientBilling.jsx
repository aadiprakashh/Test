const PatientBilling = () => {
    return( <div className="p-6">
        <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                        Recent Transactions
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
                                    Root Canal Treatment
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Dec 15, 2023</p>
                            </div>
                            <p className="text-sm font-medium text-red-600">$350.00</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500">
                                    Invoice #INV-2023-12-15
                                </span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                                    Download
                                </button>
                                <button className="!rounded-button px-3 py-1 text-sm border border-transparent bg-custom text-white hover:bg-custom/90">
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Dental Cleaning
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Sep 30, 2023</p>
                            </div>
                            <p className="text-sm font-medium text-green-600">PAID</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500">
                                    Invoice #INV-2023-09-30
                                </span>
                            </div>
                            <div className="flex space-x-2">
                                <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Payment Methods
                </h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <i className="far fa-credit-card text-gray-400 mr-3"></i>
                                <div>
                                    <p className="font-medium text-gray-900">
                                        Visa ending in 4242
                                    </p>
                                    <p className="text-sm text-gray-500">Expires 12/24</p>
                                </div>
                            </div>
                            <button className="text-sm text-custom hover:text-custom/80">
                                Edit
                            </button>
                        </div>
                    </div>
                    <button className="!rounded-button w-full px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                        <i className="fas fa-plus mr-2"></i>Add New Payment Method
                    </button>
                </div>
            </div>
        </div>
    </div>);
}
 export default PatientBilling