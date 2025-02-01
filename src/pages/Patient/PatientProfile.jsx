const PatientProfile = () => {
    return (
        <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        {" "}
                                        <label className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value="Michael Thompson"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Gender
                                        </label>
                                        <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Date of Birth
                                        </label>
                                        <input
                                            type="date"
                                            value="1985-03-15"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Blood Type
                                        </label>
                                        <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm">
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    Contact Information
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        {" "}
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value="michael.thompson@email.com"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            value="+1 (555) 123-4567"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            value="123 Main Street, Apt 4B"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            value="New York"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            ZIP Code
                                        </label>
                                        <input
                                            type="text"
                                            value="10001"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-4">
                                    Insurance Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Insurance Provider
                                        </label>
                                        <input
                                            type="text"
                                            value="BlueCross BlueShield"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Policy Number
                                        </label>
                                        <input
                                            type="text"
                                            value="BCBS-123456789"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Group Number
                                        </label>
                                        <input
                                            type="text"
                                            value="GRP-987654"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-4">
                                    Emergency Contact
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            value="Sarah Thompson"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Relationship
                                        </label>
                                        <input
                                            type="text"
                                            value="Spouse"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            value="+1 (555) 987-6543"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default PatientProfile;