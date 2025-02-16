import { FaShieldAlt, FaIdCard, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const BillingTab = ({ billing, insurance }) => {
  const insuranceUsedPercentage = (insurance.insurance_used / insurance.insurance_annual_limit) * 100;
  const coverage = Math.round(insuranceUsedPercentage);
  
  // Dynamic colors based on insurance usage
  const getCoverageColor = () => {
    if (coverage < 50) return "bg-green-500";
    if (coverage < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-all hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Insurance & Billing</h3>
        <FaShieldAlt className="text-blue-600 text-3xl" />
      </div>

      {/* Insurance Details */}
      <div className="space-y-4 text-gray-800">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 flex items-center">
            <FaIdCard className="text-gray-500 mr-2" /> Provider
          </span>
          <span>{insurance.insurance_provider}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 flex items-center">
            <FaIdCard className="text-gray-500 mr-2" /> Policy Number
          </span>
          <span>{insurance.insurance_policy_number}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 flex items-center">
            <FaMoneyBillWave className="text-gray-500 mr-2" /> Annual Limit
          </span>
          <span>₹ {insurance.insurance_annual_limit.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 flex items-center">
            <FaMoneyBillWave className="text-gray-500 mr-2" /> Used Insurance
          </span>
          <span>₹ {insurance.insurance_used.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 flex items-center">
            <FaMoneyBillWave className="text-gray-500 mr-2" /> Remaining Insurance
          </span>
          <span>₹ {insurance.insurance_remaining.toLocaleString()}</span>
        </div>
      </div>

      {/* Insurance Coverage Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">Insurance Coverage</p>
          <span className={`text-sm font-semibold ${coverage < 50 ? "text-green-500" : coverage < 80 ? "text-yellow-500" : "text-red-500"}`}>
            {coverage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden shadow-inner">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${getCoverageColor()}`}
            style={{ width: `${coverage}%` }}
          ></div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-6 flex items-center bg-gray-100 p-3 rounded-lg">
        <FaCheckCircle className={`${coverage < 80 ? "text-green-500" : "text-red-500"} text-xl mr-3`} />
        <p className="text-sm text-gray-700">
          {coverage < 80 ? "Your insurance is in a healthy range." : "Warning: Your insurance is almost used up!"}
        </p>
      </div>
    </div>
  );
};

export default BillingTab;
