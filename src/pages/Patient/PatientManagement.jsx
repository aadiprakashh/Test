import { useState } from "react";
import PatientProfile from "./PatientProfile";
import PatientMedical from "./PatientMedical";
import PatientTreatment from "./PatientTreatment";
import PatientAppointment from "./PatientAppointment";
import PatientBilling from "./PatientBilling";

const PatientManagement = () => {
    const [activeTab , setActiveTab] = useState('profile');

    return (
        <div className="w-full p-8">
            {/* ?header */}
            <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Left Section: Back Button & Title */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <i className="fas fa-arrow-left mr-2"></i> Back
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Patient Details
                        </h1>
                    </div>

                    {/* Right Section: Print & Schedule Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <i className="fas fa-print mr-2"></i> Print Records
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-black shadow-sm hover:bg-gray-800"
                        >
                            <i className="fas fa-calendar-plus mr-2"></i> Schedule Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* personalinfo */}
            <div className="bg-white shadow rounded-lg mb-8">
                <div className="px-6 py-6">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-2">
                            <img
                                className="h-32 w-32 rounded-lg object-cover"
                                src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a middle-aged man with a friendly smile, wearing casual business attire against a neutral background. The image should be well-lit and convey approachability and trust&width=300&height=300&orientation=squarish&flag=fb646aa9-3399-4b10-8516-d2421cdcf489"
                                alt="Patient photo"
                            />
                        </div>
                        <div className="col-span-7">
                            <div className="flex items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900 mr-4">
                                    Michael Thompson
                                </h2>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    <i className="fas fa-exclamation-circle mr-1"></i>
                                    Allergies
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Patient ID</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        PT-20231234
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Date of Birth</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        15 Mar 1985 (38 years)
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        michael.thompson@email.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">
                                    Quick Stats
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Last Visit</span>
                                        <span className="text-sm font-medium text-gray-900">
                                            15 Dec 2023
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">
                                            Next Appointment
                                        </span>
                                        <span className="text-sm font-medium text-custom">
                                            28 Jan 2024
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">
                                            Outstanding Balance
                                        </span>
                                        <span className="text-sm font-medium text-red-600">
                                            $350.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        <button
                            onClick={()=>{setActiveTab("profile")}}
                            className={` ${activeTab === "profile" ? "border-black text-black" : "text-gray-700 border-gray-300"} w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={()=>{setActiveTab("medical")}}
                            className={`${activeTab === "medical" ? "border-black text-black" : "text-gray-700 border-gray-300"} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                        >
                            Medical History
                        </button>
                        <button
                            onClick={()=>{setActiveTab("treatment")}}
                            className={`${activeTab === "treatment" ? "border-black text-black" : "text-gray-700 border-gray-300"} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                        >
                            Treatment History
                        </button>
                        <button
                            onClick={()=>{setActiveTab("appointment")}}
                            className={`${activeTab === "appointment" ? "border-black text-black" : "text-gray-700 border-gray-300"} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                        >
                            Appointments
                        </button>
                        <button
                            onClick={()=>{setActiveTab("billing")}}
                            className={`${activeTab === "billing" ? "border-black text-black" : "text-gray-700 border-gray-300"} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                        >
                            Billing
                        </button>
                    </nav>
                </div>

                {/* <!-- Profile --> */}
                {activeTab === "profile" && <PatientProfile/>}

                {/* <!-- medical history --> */}
               {activeTab === "medical" && <PatientMedical/>}

                {/* <!-- treatment history --> */}
                {activeTab === "treatment" && <PatientTreatment/>}

                {/* <!-- appointment --> */}
                {activeTab === "appointment" && <PatientAppointment/>}

                {/* <!-- Billing --> */}
                {activeTab === "biling" && <PatientBilling/>}
            </div>
        </div>
    );
};
export default PatientManagement;
