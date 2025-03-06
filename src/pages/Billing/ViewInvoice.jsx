import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewInvoice = ({ patient, billing, services, closeModal, insurance }) => {
  return (
   
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
        <div className=" w-[850px] mx-auto fixed bg-white shadow-md rounded-lg px-6">
        {/* <FaTimes onClick={closeModal} 
        size={20} className="ms-auto"/> */}
        {/* header */}
            <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Invoice {billing.invoice_id}</h1>
                        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                            <span>Issue Date: March 1, 2025</span>
                            <span>Due Date: March 15, 2025</span>
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${billing.total_amount === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-900'}`}>
                    {billing.total_amount === 0 ? "Paid" : "Pending"}
                  </span>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <i className="fas fa-print mr-2"></i> Print
                        </button>
                        <button
                            className="!rounded-button inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-green-500 border-green-500 ">
                            <i className="fas fa-download mr-2"></i> Download PDF
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 p-6">
            {/* patient-info */}
                <div className="col-span-1">
                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Patient Information</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="text-sm font-medium text-gray-500">Name</label>
                                <p className="mt-1 text-sm text-gray-900">{patient.name}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Contact</label>
                                <p className="mt-1 text-sm text-gray-900">{patient.phone}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Insurance Provider</label>
                                <p className="mt-1 text-sm text-gray-900">{insurance.insurance_provider}</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-500">Policy Number</label>
                                <p className="mt-1 text-sm text-gray-900">{insurance.insurance_policy_number}</p>
                            </div>
                        </div>
                    </div>
                </div>

{/* billing info */}
                <div className="col-span-2">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID</th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service</th>
                                <th scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Cost</th>
                                {/* <th scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Total</th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {services.map((service, index)=>(
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{service.service_id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left">{service.service_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">₹{service.cost}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">$105.00</td> */}
                            </tr>
                            ))}
                           
                            {/* <tr className="bg-gray-50">
                                <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Paid Amount</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                    ₹{billing.paid_amount}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Remaining Payment</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                                    ₹{billing.balance_due}</td>
                            </tr> */}
                            <tr className="bg-gray-50">
                                <td colSpan="2"
                                    className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-900">Grand
                                    Total</td>
                                <td
                                    className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-900 text-right">
                                    ₹{services.reduce((acc, service)=> acc + service.cost, 0).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                        <p className="mt-1 text-sm text-gray-900">{billing.payment_method}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Transaction ID</h3>
                        <p className="mt-1 text-sm text-gray-900">TXN-987654321</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">Payment Date</h3>
                        <p className="mt-1 text-sm text-gray-900">March 1, 2025</p>
                    </div>
                </div>
            </div>

{/* buttons */}
            <div className="px-6 py-4 flex justify-end space-x-4 border-t border-gray-200">
                <button
                onClick={closeModal}
                    className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <i className="fas fa-times mr-2"></i> Close
                </button>
                <button
                    className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <i className="fas fa-sync-alt mr-2"></i> Send Invoice
                </button>
                <Link
                to="/payment" patient={patient} billing={billing} services={services} insurance={insurance}
                
                    className="!rounded-button inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-500/90">
                    <i className="fas fa-credit-card mr-2"></i> Process Payment
                </Link>
            </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Payment History</h2>
            </div>
            <div className="px-6 py-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-900">Payment #1</p>
                            <p className="text-sm text-gray-500">March 1, 2025</p>
                        </div>
                        <div className="text-sm text-gray-900">$475.00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default ViewInvoice;
