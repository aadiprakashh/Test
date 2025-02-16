const PatientMedical = () => {
    return(
        <div className="p-6">
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Medical Conditions
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className="text-red-600 font-medium">
                                        • Penicillin Allergy
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">• Asthma (Mild)</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-700">• High Blood Pressure</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Current Medications
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Lisinopril 10mg</span>
                                    <span className="text-gray-500">Daily</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Ventolin Inhaler</span>
                                    <span className="text-gray-500">As needed</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Immunization History
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Flu Shot</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        Oct 15, 2023
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">COVID-19 Vaccine</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        Mar 20, 2023
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Tetanus Shot</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        Jun 12, 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default PatientMedical;