const PatientTreatment = () => {
    return(
        <div className="p-6">
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Treatment History
                            </h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Root Canal Treatment
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Tooth #18 - Upper right molar
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">Dec 15, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Procedure completed successfully. Follow-up scheduled for
                                        Jan 28.
                                    </p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Dental Cleaning
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Regular checkup and cleaning
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">Sep 30, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Regular cleaning performed. No major issues found.
                                    </p>
                                </div>
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-medium text-gray-900">
                                                Cavity Filling
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Tooth #14 - Upper left premolar
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">Jul 22, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Composite filling placed. Patient tolerated procedure well.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );

}
export default PatientTreatment;