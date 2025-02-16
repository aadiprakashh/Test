const TreatmentsPlanTab = ({ patient }) => {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Treatment Plan</h3>
        <p className="text-gray-700">{patient.treatment_plan}</p>
      </div>
    );
  };
  export default TreatmentsPlanTab