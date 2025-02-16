import { Link } from "react-router-dom";

const NewInvoice = () => {
        const inputClass =
          "mt-1 px-2 py-2 block w-full shadow-sm focus:ring-custom focus:border-custom sm:text-sm border-gray-300 rounded-md";
        const labelClass = "block text-sm font-medium text-gray-700";
      
        const patientFields = [
          { label: "Patient Name", type: "text" },
          { label: "Patient ID", type: "text", readOnly: true, extraClass: "bg-gray-50" },
          { label: "Date of Birth", type: "date" },
          { label: "Phone Number", type: "tel" },
          { label: "Email", type: "email", span: 2 },
          { label: "Billing Address", type: "textarea", span: 2, rows: 2 },
        ];
      
        const paymentMethods = [
          { id: "card", label: "💳 Credit/Debit Card" },
          { id: "upi", label: "📲 UPI / Mobile Payments" },
          { id: "cash", label: "💵 Cash" },
          { id: "bank", label: "🏦 Bank Transfer" },
          { id: "insurance", label: "🏥 Insurance Claim" },
        ];
      
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-medium text-gray-900">New Invoice</h3>
              </div>
      
              {/* Patient Info Section */}
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4 col-span-2">
                  <h4 className="text-lg font-medium text-gray-700">Patient Info</h4>
                  <div className="space-y-3">
                    <div>
                      <label className={labelClass}>Patient Search</label>
                      <div className="mt-1 relative">
                        <input
                          type="text"
                          className={`${inputClass}`}
                          placeholder="Search by name, ID, or phone number..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <i className="fas fa-search text-gray-400"></i>
                        </div>
                      </div>
                    </div>
      
                    {/* Patient Details */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {patientFields.map((field, index) => (
                        <div key={index} className={`col-span-${field.span || 1}`}>
                          <label className={labelClass}>{field.label}</label>
                          {field.type === "textarea" ? (
                            <textarea
                              className={`${inputClass} ${field.extraClass || ""}`}
                              rows={field.rows}
                            ></textarea>
                          ) : (
                            <input
                              type={field.type}
                              className={`${inputClass} ${field.extraClass || ""}`}
                              readOnly={field.readOnly || false}
                            />
                          )}
                        </div>
                      ))}
                      <div className="col-span-2">
                        <label className={labelClass}>Insurance Provider</label>
                        <select className={`${inputClass}`}>
                          <option>Select Provider</option>
                          <option>Aetna</option>
                          <option>Blue Cross</option>
                          <option>Cigna</option>
                          <option>None</option>
                        </select>
                      </div>
                    </div>
                  </div>
      
                  <div className="mt-4 flex justify-end">
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                      Add New Patient
                    </button>
                  </div>
                </div>
      
                {/* Treatment & Services Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-700">Treatment & Services</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-4">
                        <label className={labelClass}>Treatment Name</label>
                        <select className={`${inputClass}`}>
                          <option>Select Treatment</option>
                          <option>Consultation</option>
                          <option>Dental Cleaning</option>
                          <option>Filling</option>
                          <option>Extraction</option>
                          <option>Root Canal</option>
                          <option>Custom Treatment</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className={labelClass}>Date</label>
                        <input type="date" className={`${inputClass}`} />
                      </div>
                      <div className="col-span-3">
                        <label className={labelClass}>Doctor</label>
                        <select className={`${inputClass}`}>
                          <option>Select Doctor</option>
                          <option>Dr. Smith</option>
                          <option>Dr. Johnson</option>
                          <option>Dr. Williams</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className={labelClass}>Unit Price ($)</label>
                        <input type="number" className={`${inputClass} bg-gray-50`} readOnly />
                      </div>
                      <div className="col-span-1">
                        <label className={labelClass}>Qty</label>
                        <input type="number" min="1" defaultValue="1" className={`${inputClass}`} />
                      </div>
                    </div>
      
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Service tax (10%) will be automatically applied
                      </div>
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                        <i className="fas fa-plus mr-2"></i>Add Treatment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Payment Section */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Payment Options</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center">
                        <input type="radio" name="payment_method" id={method.id} className="mr-2" />
                        <label htmlFor={method.id} className="text-sm text-gray-700">
                          {method.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
      
              {/* Actions */}
              <div className="mt-6 flex items-center justify-end space-x-4">
                <Link to="/billing" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium">
                  Cancel
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Create Invoice
                </button>
              </div>
            </div>
          </div>
        );
      };
      
      export default NewInvoice;
      