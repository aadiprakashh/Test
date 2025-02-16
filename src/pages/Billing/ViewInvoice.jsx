const ViewInvoice = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[700px] mx-auto fixed bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Dental Clinic</h1>
            <p className="text-gray-600">123 Smile St, City, Country</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Invoice</h2>
            <p className="text-gray-600">
              Date: <span id="invoice-date">2025-02-16</span>
            </p>
            <p className="text-gray-600">
              Invoice #: <span id="invoice-number">DNT-00123</span>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Patient Information</h3>
          <p className="text-gray-600">
            <strong>Name:</strong> John Doe
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> (987) 654-3210
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> johndoe@example.com
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Treatment Details</h3>
          <table className="w-full mt-2 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 p-2">Service</th>
                <th className="border border-gray-300 p-2">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Teeth Cleaning</td>
                <td className="border border-gray-300 p-2 text-right">
                  $50.00
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Cavity Filling</td>
                <td className="border border-gray-300 p-2 text-right">
                  $80.00
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">Total</td>
                <td className="border border-gray-300 p-2 text-right font-bold">
                  $130.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Payment Information</h3>
          <p className="text-gray-600">
            <strong>Payment Method:</strong> Credit Card
          </p>
          <p className="text-gray-600">
            <strong>Status:</strong> Paid
          </p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-5">
          <button
            onClick={closeModal}
            className="px-5 py-1 rounded border border-green-500 text-green-500"
          >
            Close
          </button>
          <button className="px-5 py-1 rounded bg-green-500 text-white">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
