const MedicalHistoryTab = ({ patient }) => {
  
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Medical History</h3>
        <div className="">
            <div className="flex gap-3">
              <span className="text-gray-500">Allergy</span>{" "}
              <span className="text-gray-900">{patient.allergies.join(', ')}</span>
            </div>
            <div className="flex gap-3">
              {" "}
              <span className="text-gray-500">Pervious Conditions</span>
              <span className="text-gray-900">{patient.previous_conditions.join(', ')}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-gray-500">Medications</span>
              <span className="text-gray-900">{patient.current_medications.join(', ')}</span>
            </div>
            
          </div>
      </div>
    );
  };
export default MedicalHistoryTab  